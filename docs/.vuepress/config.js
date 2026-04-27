import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { generateSidebar } from './plugins/sidebarMaker.js';

export default defineUserConfig({
  base: '/portfolio/',
  bundler: viteBundler(),
  title: 'Portfolio',
  lang: 'ko',
  theme: defaultTheme({
    sidebar: generateSidebar(),
  }),
})