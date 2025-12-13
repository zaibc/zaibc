import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  cleanUrls: true,
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
      ],
      'notes/cn': [
        {
          text: '《我们为何而来：个体、文明与未来的终极答案》', items: [
            { text: '前言', link: '/notes/cn/' },
            { text: '如何开始', link: '/notes/cn/chapter_00' },
            { text: '第一章：意识是什么', link: '/notes/cn/chapter_01' },
            { text: '第二章：意识的边界', link: '/notes/cn/chapter_02' },
            { text: '第三章：意识的意义', link: '/notes/cn/chapter_03' },
            { text: '第四章：有限生命与体验密度', link: '/notes/cn/chapter_04' },
            { text: '第五章：虚拟世界的必然性', link: '/notes/cn/chapter_05' },
            { text: '第六章：个体为何而来', link: '/notes/cn/chapter_06' },
            { text: '第七章：文明是因果系统', link: '/notes/cn/chapter_07' },
            { text: '第八章：文明的限制', link: '/notes/cn/chapter_08' },
            { text: '第九章：文明的意义', link: '/notes/cn/chapter_09' },
            { text: '第十章：L0-原生文明', link: '/notes/cn/chapter_10' },
            { text: '第十一章：L1-代理文明', link: '/notes/cn/chapter_11' },
            { text: '第十二章：TCS-文明如何沟通的唯一可能', link: '/notes/cn/chapter_12' },
            { text: '第十三章：TCS的形式和握手协议', link: '/notes/cn/chapter_13' },
            { text: '第十四章：我们能做什么', link: '/notes/cn/chapter_14' },
            { text: '第十五章：未来一百年-L0 的最后窗口', link: '/notes/cn/chapter_15' },
            { text: '第十六章：当我们理解自身-宇宙的新尺度', link: '/notes/cn/chapter_16' },
            { text: '附加：当理论遇见现实世界-一些必要的说明', link: '/notes/cn/chapter_a1' },
            { text: '致读者：虚拟世界与我的自我和解', link: '/notes/cn/chapter_a2' },
          ]
        }
      ],
      'notes/en': [
        {
          text: 'Why We Are Here: The Ultimate Answer for Individuals, Civilizations, and the Future', items: [
            { text: 'Preface', link: '/notes/en/' },
            { text: 'How to Begin', link: '/notes/en/chapter_00' },
            { text: '1. What Is Consciousness', link: '/notes/en/chapter_01' },
            { text: '2. The Boundaries of Consciousness', link: '/notes/en/chapter_02' },
            { text: '3. The Meaning of Consciousness', link: '/notes/en/chapter_03' },
            { text: '4. Finite Life and Experience Density', link: '/notes/en/chapter_04' },
            { text: '5. The Inevitability of Virtual Worlds', link: '/notes/en/chapter_05' },
            { text: '6. Why Individuals Are Here', link: '/notes/en/chapter_06' },
            { text: '7. Civilization as a Causal System', link: '/notes/en/chapter_07' },
            { text: '8. The Limits of Civilization', link: '/notes/en/chapter_08' },
            { text: '9. The Meaning of Civilization', link: '/notes/en/chapter_09' },
            { text: '10. L0 — Native Civilizations', link: '/notes/en/chapter_10' },
            { text: '11. L1 — Agent Civilizations', link: '/notes/en/chapter_11' },
            { text: '12. TCS — The Only Possible Way for Civilizations to Communicate', link: '/notes/en/chapter_12' },
            { text: '13. Forms of TCS and the Handshake Protocol', link: '/notes/en/chapter_13' },
            { text: '14. What We Can Do', link: '/notes/en/chapter_14' },
            { text: '15. The Next Hundred Years — L0’s Final Window', link: '/notes/en/chapter_15' },
            { text: '16. When We Understand a New Scale of Self and Universe', link: '/notes/en/chapter_16' },
            { text: 'Appendix: When Theory Meets the Real World — Some Necessary Clarifications', link: '/notes/en/chapter_a1' },
            { text: 'To the Reader: Virtual Worlds and My Reconciliation with Myself', link: '/notes/en/chapter_a2' },
          ]
        }
      ],
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
