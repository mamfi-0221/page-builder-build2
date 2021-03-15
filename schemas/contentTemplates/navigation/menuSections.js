export default {
    name: 'navMenuItems',
    type: 'object',
    fieldsets: [
        {
        title: 'Link',
        name: 'link',
        description: 'Only the first value of these will be used'
        }
    ],
    fields: [
        {
            name: 'addBrand',
            title: 'Add Brand',
            description: 'Add a logo or picture to brand your page.',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'menuItems',
            title: 'Menu Items',
            fieldset: 'link',
            description: 'Add the pages you want to link using this menu.',
            validation: Rule => [
                Rule.max(5).warning('Are you sure you want more than 5 items?'),
                Rule.unique().error('You have duplicate menu items'),
            ],
            type: 'array',
            of: [{ 
                type: 'reference', 
                to: [{ type: 'createPage' }]
            }]
        },
        {
            name: 'link',
            title: 'External Link',
            fieldset: 'link',
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