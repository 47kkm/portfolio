import { defineClientConfig } from 'vuepress/client';
import Layout from './layouts/Layout.vue';
import TheLink from './components/TheLink.vue';
import MainHero from './components/MainHero.vue';
import PanelCareer from './components/PanelCareer.vue';
import PanelStack from './components/PanelStack.vue';
import PanelProject from './components/PanelProject.vue';
import PanelEducation from './components/PanelEducation.vue';
import PanelLink from './components/PanelLink.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('TheLink', TheLink);
    app.component('MainHero', MainHero);
    app.component('PanelCareer', PanelCareer);
    app.component('PanelStack', PanelStack);
    app.component('PanelProject', PanelProject);
    app.component('PanelEducation', PanelEducation);
    app.component('PanelLink', PanelLink);
  },
  layouts: {
    Layout,
  },
})
