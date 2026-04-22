import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: 'COSY Portal — 기획서',
  description: '크리에이터의 운영체제. 플랫폼을 넘어 생태계로. | EP × glowuprizz JV',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: false,
    siteTitle: '🏠 COSY Portal',

    nav: [
      { text: '홈', link: '/' },
      { text: '비전', link: '/01-비전과개요/비전선언' },
      { text: '5대 축', link: '/02-5대축/일상화' },
      { text: '인프라', link: '/03-인프라아키텍처/에이전트빌더' },
      { text: 'JV 구조', link: '/04-JV구조/역할분담' },
      { text: '로드맵', link: '/05-로드맵/단계별로드맵' },
      { text: '시장 분석', link: '/06-시장분석/시장개요' },
      { text: '해자 & 전략', link: '/07-해자와전략/4중해자' },
      { text: '서비스 전략', link: '/08-서비스전략/글로벌서비스맵' },
    ],

    sidebar: [
      {
        text: '🏠 비전 & 개요',
        collapsed: false,
        items: [
          { text: '비전 선언', link: '/01-비전과개요/비전선언' },
          { text: '플랫폼 vs 포털', link: '/01-비전과개요/플랫폼vs포털' },
          { text: '핵심 가치', link: '/01-비전과개요/핵심가치' },
        ],
      },
      {
        text: '🏛️ 5대 축 (Five Pillars)',
        collapsed: false,
        items: [
          { text: '① 일상화 — Dailyness', link: '/02-5대축/일상화' },
          { text: '② 소속감 — Belonging', link: '/02-5대축/소속감' },
          { text: '③ 솔루션 — Solutions', link: '/02-5대축/솔루션' },
          { text: '④ 인프라 — Infrastructure', link: '/02-5대축/인프라' },
          { text: '⑤ 브랜딩 — Branding', link: '/02-5대축/브랜딩' },
        ],
      },
      {
        text: '⚙️ 인프라 아키텍처',
        collapsed: false,
        items: [
          { text: 'Agent Builder', link: '/03-인프라아키텍처/에이전트빌더' },
          { text: 'Dashboard Builder', link: '/03-인프라아키텍처/대시보드빌더' },
          { text: 'Marketplace', link: '/03-인프라아키텍처/마켓플레이스' },
          { text: 'COSY API Hub', link: '/03-인프라아키텍처/API허브' },
        ],
      },
      {
        text: '🤝 JV 구조',
        collapsed: false,
        items: [
          { text: 'EP × glowuprizz 역할', link: '/04-JV구조/역할분담' },
          { text: '법인 구조 옵션', link: '/04-JV구조/법인구조' },
          { text: '수익 배분', link: '/04-JV구조/수익배분' },
        ],
      },
      {
        text: '🗓️ 로드맵',
        collapsed: false,
        items: [
          { text: '단계별 로드맵', link: '/05-로드맵/단계별로드맵' },
          { text: '리소스 계획', link: '/05-로드맵/리소스계획' },
        ],
      },
      {
        text: '📊 시장 분석',
        collapsed: false,
        items: [
          { text: '크리에이터 이코노미 시장', link: '/06-시장분석/시장개요' },
          { text: '경쟁사 분석', link: '/06-시장분석/경쟁사분석' },
          { text: '포지셔닝 맵', link: '/06-시장분석/포지셔닝' },
          { text: '벤치마킹', link: '/06-시장분석/벤치마킹' },
        ],
      },
      {
        text: '🛡️ 해자 & 전략',
        collapsed: false,
        items: [
          { text: '4중 Lock-in 해자', link: '/07-해자와전략/4중해자' },
          { text: 'Exit 전략', link: '/07-해자와전략/Exit전략' },
        ],
      },
      {
        text: '🌍 서비스 전략',
        collapsed: false,
        items: [
          { text: '글로벌 서비스 맵', link: '/08-서비스전략/글로벌서비스맵' },
        ],
      },
    ],

    outline: {
      level: [2, 3],
      label: '목차',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '검색' },
          modal: {
            noResultsText: '결과를 찾을 수 없습니다',
            resetButtonTitle: '초기화',
            footer: { selectText: '선택', navigateText: '이동' },
          },
        },
      },
    },

    footer: {
      message: 'Confidential — For internal discussion only',
      copyright: '© 2026 COSY Portal (EP × glowuprizz JV)',
    },
  },
})
