import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-cn",
    title: "WangLiang.Docs",
    description: "个人文档",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: 'Prgramming',
                items: [
                    { text: 'Python', link: '/programming/python' },
                    { text: 'SQL', link: '/programming/sql' }
                ]
            },
            {
                text: 'System',
                items: [
                    { text: 'Windows', link: '/system/windows' },
                    { text: 'Linux', link: '/system/linux' },
                ]
            },
            {
                text: 'Network',
                items: [
                    { text: 'GFW', link: '/network/gfw' },
                ]
            }
        ],

        sidebar: {
            '/programming/': [
                {
                    text: 'Python',
                    link: '/programming/python',
                    items: [
                        { text: '基本语法', link: '/programming/python-basic-syntax' },
                        { text: '数据类型', link: '/programming/python-data-type' },
                        {
                            text: '后端框架',
                            items: [
                                { text: 'Flask', link: '/programming/python-flask' },
                                { text: 'Django', link: '/programming/python-django' }
                            ]
                        },
                        {
                            text: '爬虫',
                            items: [
                                { text: 'Requests', link: '/programming/requests' },
                            ]
                        }
                    ]
                },
                {
                    text: 'SQL',
                    items: [
                        { text: 'MySQL', link: '/programming/sql-mysql' },
                    ]

                }
            ],

            '/network/': [
                {
                    text: 'GFW',
                    link: '/network/gfw',
                },
                {
                    text: '家庭组网',
                    items: [
                        { text: 'Mesh', link: '/network/mesh' }
                    ]
                }
            ]
        },

        search: {
            provider: 'local',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com' }
        ],
    }
})
