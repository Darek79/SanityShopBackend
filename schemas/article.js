export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
        {
            name: 'articleTitle',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'Rich',
            type: 'array',
            title: 'Description',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Some of your visitors cannot see images,
                  be they blind, color-blind, low-sighted;
                  alternative text is of great help for those
                  people that can rely on it to have a good idea of
                  what\'s on your page.`,
                            options: {
                                isHighlighted: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
