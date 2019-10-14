module.exports = {

    title: 'RemoTutor',
    description: '노트를 위한',
    plugins: ['@vuepress/last-updated'],
    base: '/remotutor/',
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
                        items: [
                            {
                                text: 'Zero',
                                items: [
                                    { text: 'Zero-java', link: '/board/zero-java/' }
                                ]
                            }
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
                                'oop-patterns',
                            ]
                        }
                    ]
                }
            }
        }
    }
}