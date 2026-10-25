import { defineClientConfig } from 'vuepress/client';
import TheLink from './components/TheLink.vue';
import PanelProject from './components/PanelProject.vue';
import PanelMain from './components/PanelMain.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('TheLink', TheLink);
    app.component('PanelProject', PanelProject);
    app.component('PanelMain', PanelMain);
  },
})