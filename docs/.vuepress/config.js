import { slugify } from '@mdit-vue/shared';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { generateSidebar } from './plugins/sidebarMaker.js';
import { writeProjectList } from './plugins/projectListMaker.js';

export default defineUserConfig({
  base: '/portfolio/',
  bundler: viteBundler(),
  title: '김경미 포트폴리오',
  description: 'Vue·Nuxt 프론트엔드 개발자 김경미의 포트폴리오',
  lang: 'ko',
  markdown: {
    // 기본 slugify 는 NFKD 정규화로 한글 id 를 자모로 분리하므로 NFC 로 다시 조합
    slugify: (str) => slugify(str).normalize('NFC'),
  },
  theme: defaultTheme({
    navbar: [
      { text: '프로젝트', link: '/projects/' },
      { text: 'GitHub', link: 'https://github.com/47kkm' },
    ],
    sidebar: generateSidebar(),
    lastUpdated: false,
    contributors: false,
  }),
  onPrepared: writeProjectList,
})
