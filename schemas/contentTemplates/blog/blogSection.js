export default {
    name: 'blogSection',
    title: 'Blog Section',
    type: 'object',
    fields: [
        {
            name: 'addImage',
            title: 'Add Blog Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'addHeading',
            title: 'Add Heading',
            type: 'string'
        },
        {
            name: 'addAuthor',
            title: 'Author',
            type: 'string'
        },
        {
            name: 'addText',
            title: 'Blog Content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'date',
            options: {
                dateFormat: 'MM-DD-YYYY',
                calendarTodayLabel: 'Today'
            }
        }
    ]
}