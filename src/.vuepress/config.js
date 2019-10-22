module.exports = {
    base: '/remotutor/',
    plugins: ['@vuepress/last-updated'],
    markdown: {
        //markdown
        extendMarkdown: md => {
            md.set({ breaks: true });
            md.use(require('markdown-it-task-checkbox'));
            md.use(require('markdown-it-include'))
        }
    },
    locales: {
        /* This is where you place your general locale config */
        '/': {
            title: 'Remotutor',
            description: 'Tutoring Management',
            lang: 'Korean',
            label: 'Korean',
            selectText: 'Languages',
            ariaLabel: '언어',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
        },
        '/language/en/': {
            title: 'Remotutor',
            description: 'Tutoring Management',
            lang: 'English',
            label: 'English',
            selectText: 'Languages',
            ariaLabel: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
        }
    },
    
    themeConfig: {
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
                        items: [
                            {
                                text: 'Zero',
                                items: [
                                    { text: 'Zero-java', link: '/board/zero-java/' }
                                ]
                            }
                        ]
                    },
                    { text: 'Github', link: 'https://github.com/zerosheepmoo/remotutor' }
                ],
                sidebar: {
                    '/guide/': [{
                        title: 'Guide',
                        collapsable: false,
                        children: [
                            '',
                            'installing',
                            'developing',
                            'markdown-basic',
                            'example',

                        ]
                    }],
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
                    '/board/zero-java/': [

                        {
                            title: 'Zero java Board',
                            collapsable: false,
                            children: [
                                '',
                                'java-basic-one',
                                'java-basic-two',
                                'stack',
                                'queue',
                                'recursion',
                                'oop-patterns',
                            ]
                        }
                    ]
                }
            },
            '/language/en/': {
                nav: [
                    { text: 'Home', link: '/language/en/' },
                    { text: 'Guide', link: '/language/en/guide/' },
                    {
                        text: 'Boxes',
                        ariaLabel: 'Box Menu',
                        items: [
                            { text: 'Choi', link: '/language/en//boxes/choi/' },
                            { text: 'Chae', link: '/language/en/boxes/chae/' }
                        ]
                    },
                    {
                        text: 'Board',
                        items: [
                            {
                                text: 'Zero',
                                items: [
                                    { text: 'Zero-java', link: '/language/en/board/zero-java/' }
                                ]
                            }
                        ]
                    },
                    { text: 'Github', link: 'https://github.com/zerosheepmoo/remotutor' },
                ],
                sidebar: {
                    '/language/en/guide/': [{
                        title: 'Guide',
                        collapsable: false,
                        children: [
                            '',
                            'installing',
                            'developing',
                            'markdown-basic',
                            'example',

                        ]
                    }],
                    '/language/en/boxes/choi/': [
                        {
                            title: 'Choi Box',
                            collapsable: false,
                            children: [
                                '',
                                'first-note'
                            ]
                        },
                    ],
                    '/language/en/boxes/chae/': [
                        {
                            title: 'Chae Box',
                            collapsable: false,
                            children: [
                                '',
                                'first-note',
                            ]
                        },
                    ],
                    '/language/en/board/zero-java/': [

                        {
                            title: 'Zero java Board',
                            collapsable: false,
                            children: [
                                '',
                                'java-basic-one',
                                'java-basic-two',
                                'stack',
                                'oop-patterns',
                            ]
                        }
                    ]
                }
            },
        }
    }
}