export default {
    name: 'navMenuItems',
    type: 'object',
    fields: [
        {
            name: 'itemName',
            title: 'Item Name',
            description: 'Suggestion: Add the same name as the page you want to link.',
            type: 'string'
        },
        {
            name: 'menuItem',
            type: 'reference',
            to: [{ type: 'createPage'}]
        },
        {
            name: 'link',
            title: 'External Link',
            description: 'Example: https://www.sanity.io',
            type: 'url'
        },
        {
            name: 'menuType',
            title: 'Menu Type',
            type: 'string',
            description: 'How do you want the menu options to look.',
            options: {
                layout: 'radio',
                list: ['button', 'link']
            }
        }
    ]
}