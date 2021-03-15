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