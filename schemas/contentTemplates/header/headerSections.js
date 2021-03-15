export default {
    name: 'headerSections',
    type: 'object',
    fields: [
        {
            name: 'addCTA',
            title: 'Add Header text',
            type: 'string'
        },
        {
            name: 'addSubtitle',
            title: 'Add Header subtitle',
            type: 'string'
        },
        {
            name: 'addImage',
            title: 'Add Header Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}