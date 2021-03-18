export default {
    name: 'brandContent',
    title: 'Brand/Logo',
    description: 'Add your brand/logo',
    type: 'document',
    fields: [
        {
            name: 'brandName',
            title: 'Brand Name',
            type: 'string'
        },
        {
            name: 'addImage',
            title: 'Add Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'alt',
            title: 'Alt Text',
            description: 'Alternative Text to be shown if image fails to load.',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'brandName',
            media: 'addImage'
        },
        prepare(selection){
            const {title, media} = selection

            return {
                title: title,
                media: media
            }
        }
    }
}