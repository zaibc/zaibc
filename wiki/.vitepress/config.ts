import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  title: "Zaibc",
  description: "An independent research organization exploring foundational structures of reality, cognition, and intelligence",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/start' },
      { text: 'CCT', link: '/cct' },
      { text: 'Publications', link: '/publications' },
      { text: 'Notes', link: '/notes' },
      { text: 'About', link: '/about' },
    ],

    sidebar: {
      cct: [
        {
          text: 'CCT', items: [
            { text: 'Overview', link: '/cct/' },
          ]
        }
      ]
    }
    ,
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/zaibc' }
    // ],
    footer: {
      message: 'Zaibc @ 2025'
    }
  }
})
