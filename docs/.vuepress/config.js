import { slugify } from '@mdit-vue/shared';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { generateSidebar } from './plugins/sidebarMaker.js';
import { writeProjectList } from './plugins/projectListMaker.js';

const title = '김경미 포트폴리오';
const description = '사용자의 화면부터 팀의 개발 환경까지 만드는 프론트엔드 개발자 김경미의 포트폴리오';

export default defineUserConfig({
  base: '/portfolio/',
  bundler: viteBundler(),
  title,
  description,
  lang: 'ko',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/portfolio/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/portfolio/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/portfolio/apple-touch-icon.png' }],
  ],
  markdown: {
    // 기본 slugify 는 NFKD 정규화로 한글 id 를 자모로 분리하므로 NFC 로 다시 조합
    slugify: (str) => slugify(str).normalize('NFC'),
  },
  theme: defaultTheme({
    // hostname 을 지정하면 테마의 seo(공유 카드 메타)·sitemap 플러그인이 켜짐
    hostname: 'https://47kkm.github.io',
    themePlugins: {
      seo: {
        fallBackImage: 'https://47kkm.github.io/portfolio/og-image.png',
        // 본문 첫 문장 대신 frontmatter description(없으면 사이트 설명)을 사용
        autoDescription: false,
        isArticle: (page) => page.path !== '/',
        // 메인은 페이지 제목이 없어 사이트 제목·설명으로 채움
        ogp: (ogp) => ({
          ...ogp,
          'og:title': ogp['og:title'] || title,
          'og:description': ogp['og:description'] || description,
          'twitter:card': 'summary_large_image',
        }),
      },
    },
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
