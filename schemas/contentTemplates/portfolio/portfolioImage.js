export default {
    name: 'portfolioImage',
    type: 'object',
    fields: [
        {
            name: 'addImage',
            title: 'Add Header Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'caption',
            title: 'Caption',
            description: 'Add a caption for this image',
            type: 'string',
            options: {
                isHighlighted: true
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