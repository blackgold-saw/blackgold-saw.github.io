import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    bg_image: {
      enable: true,
      url: '/resource/img/venti1.jpg',
      opacity: 0.8,
    },
    colors: {
      primary: '#01acdb',
      // selection_bg: '#8e71c1'
    },
    fireworks: {
      enable: true,
      colors: ['#40E0D0', '#AFEEEE', '#6CCEC9'],
    },
    sidebar: {
      bg_image:'/resource/img/venti2.jpg'
    },
    banner: {
      enable: true,
      title: '黑金的杂货间',
      cloud: {
        enable: true,
      },
    },
    say: {
      enable: false,
      api: '',
      hitokoto: {
        enable: false,
        api: '',
      }
    },
    // cursor:{
    //   default: '/resource/cur/Venti Normal Select.cur'
    // },
    notice: {
      enable: true,
      content: '施工中',
    },
    pages: [
      // {
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      since: 2020,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
  markdown: {
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
        text: 'ヒント',
        langs: {
          'zh-CN': '提示',
        },
      },
      warning: {
        icon: 'i-carbon-warning-alt',
        text: '注意',
      },
      danger: {
        icon: 'i-carbon-warning',
        text: '警告',
      },
      info: {
        text: 'información',
      },
    },
  },

  addons: [
    addonWaline({
      serverURL: 'https://comment.carmendei.cn/',
      // pageview: true,
      comment: true,
    }),
  ],
})
