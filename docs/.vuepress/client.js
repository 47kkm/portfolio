import { defineClientConfig } from 'vuepress/client';
import TheButton from './components/TheButton.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('TheButton', TheButton);
  },
})