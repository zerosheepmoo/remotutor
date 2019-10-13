module.exports = {

    title: 'RemoTutor',
    description: '노트를 위한',
    plugins: ['@vuepress/last-updated'],
    base: '/',
    markdown: {
        //markdown
        extendMarkdown: md => {
            md.set({ breaks: true });
            md.use(require('markdown-it-task-checkbox'));
            md.use(require('markdown-it-include'))
        }
    },
    themeConfig: {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        locales: {
            '/': {
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/' },
                    {
                        text: 'Boxes',
                        ariaLabel: 'Box Menu',
                        items: [
                            { text: 'Choi', link: '/boxes/choi/' },
                            { text: 'Chae', link: '/boxes/chae/' }
                        ]
                    },
                    {
                        text: 'Board',
                        ariaLabel: 'Board Menu',
                        items: [
                            { text: 'Zero', link: '/board/zero/' }
                        ]
                    },
                    { text: 'Github', link: 'https://github.com/zerosheepmoo/remotutor' },
                    {
                        text: 'Languages',
                        ariaLabel: 'Language Menu',
                        items: [
                            { text: 'English', link: '/language/english/' },
                            { text: 'Korean', link: '/' }
                        ]
                    }
                ],
                sidebar: {
                    '/boxes/choi/': [
                        {
                            title: 'Choi Box',
                            collapsable: false,
                            children: [
                                '',
                                'first-note'
                            ]
                        },
                    ],
                    '/boxes/chae/': [
                        {
                            title: 'Chae Box',
                            collapsable: false,
                            children: [
                                '',
                                'first-note',
                            ]
                        },
                    ],
                    '/board/zero/': [
                        {
                            title: 'Zero Board',
                            collapsable: false,
                            children: [
                                '',
                                'first-board',
                                'second-board',
                                'third-board',
                            ]
                        }
                    ]
                }
            }
        }
    }
}