/*
*  This schema is used to structure content on your web page.
*  It references content items created in `Create Content`.
*/

export default {
    name: 'yourWebsite',
    title: 'Your website',
    type: 'document',
    fields: [
        {
            name: 'websiteName',
            title: 'Website Name',
            description: 'Add a name to your website.',
            type: 'string'
        },
        {
            name: 'addPages',
            title: 'Add Pages',
            description: 'Add the created pages you wish to include for this website.',
            type: 'array', 
            of: [{ 
                type: 'reference',
                to: [{ type: 'createPage' }]
            }]
        }
    ]
}