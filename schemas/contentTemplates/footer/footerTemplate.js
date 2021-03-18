export default {
    name: 'footerTemplate',
    title: 'Footer Template',
    type: 'object',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            name: 'footerName',
            title: 'Footer Name',
            type: 'string'
        },
        {
            name: 'templateImage',
            title: 'Template Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility if there are problems showing the image.',
            validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
            options: {
                isHighlighted: true
            }
        }
    ]
}