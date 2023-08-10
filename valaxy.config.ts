import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import { addonComponents } from 'valaxy-addon-components'

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
      url: 'https://cdn.carmendei.cn/myblog/resource/img/venti1.jpg',
      dark: 'https://cdn.carmendei.cn/myblog/resource/img/xiaoven.jpg',
      opacity: 0.8,
    },

    colors: {
      primary: 'LightSeaGreen',
      // selection_bg: '#8e71c1'
    },
    fireworks: {
      enable: true,
      colors: ['#40E0D0', '#AFEEEE', '#6CCEC9'],
    },

    banner: {
      enable: true,
      title: '黑金的杂物间',
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
      // {
      //   name: '相册',
      //   url: '/albums/',
      //   icon: 'i-ri:gallery-line',
      //   color: 'dodgerblue',
      // }
    ],

    footer: {
      since: 2020,
      beian: {
        enable: true,
        icp: '鄂ICP备2023013297号',
      },
    },

    menu: {
      custom: {
        title: "留言板",
        url: "/about",
        icon: "i-ri-clipboard-line",
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
    addonLightGallery(),
    addonComponents(),
  ],
})
