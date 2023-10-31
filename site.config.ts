import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://www.carmendei.cn/',
  lang: 'zh-CN',
  title: '杂物间',
  author: {
    name: '黑金',
    avatar: 'https://cdn.carmendei.cn/myblog/resource/img/raven.png',
    status: {
      emoji: '🥱',
      /**
       * show when hover emoji
       * @description 当鼠标悬浮在图标上时显示
       */
      message: 'zZ'
    },

  },
  frontmatter:{
    time_warning:false,
  },
  timezone: 'Asia/Shanghai',
  favicon: 'https://cdn.carmendei.cn/myblog/resource/img/raven.ico',
  subtitle: '',
  description: '坚持春困，坚持夏休，坚持秋乏，坚持冬眠',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    // {
    //   name: 'QQ 3218178006',
    //   link: 'https://qm.qq.com/q/XUIML8R5WC&personal_qrcode_source=4',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    // {
    //   name: 'GitHub',
    //   link: 'https://github.com/YunYouJun',
    //   icon: 'i-ri-github-line',
    //   color: '#6e5494',
    // },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    // {
    //   name: '网易云音乐',
    //   link: 'https://music.163.com/#/user/home?id=247102977',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   color: '#C20C0C',
    // },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    // {
    //   name: '哔哩哔哩',
    //   link: 'https://space.bilibili.com/1579790',
    //   icon: 'i-ri-bilibili-line',
    //   color: '#FF8EB3',
    // },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-line',
    //   color: '#1da1f2',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    // {
    //   name: 'E-Mail',
    //   link: 'mailto:dianfang9712@gmail.com',
    //   icon: 'i-ri-mail-line',
    //   color: '#8E71C1',
    // },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  search: {
    enable: true,
    type: 'fuse'
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      threshold: 0.1,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  comment: {
    enable: true
  },
  mediumZoom: {
    enable: true,
  },
  vanillaLazyload: { enable: true },
  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 200
      }
    }
  },
  encrypt: {
    enable: true,
  },
  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
