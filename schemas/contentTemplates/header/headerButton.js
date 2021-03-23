export default {
    name: 'headerButton',
    title: 'Header Button',
    type: 'object',
    fields: [
        {
            name: 'displayText',
            title: 'Display Text',
            type: 'string'
        },
        {
            name: 'linkToPage',
            title: 'Link to Page',
            description: 'When the button is clicked, to what page will it direct?',
            type: 'reference',
            to: [
                { type: 'createPage' },
                { type: 'mainPage' }
            ]
        }
    ]
}