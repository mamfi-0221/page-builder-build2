/*
*  This is a sub schema of top level schema `Page Template`
*/

export default {
    name: 'templateContent',
    title: 'Template Content',
    type: 'object',
    fields: [
        {
            name: 'templateName',
            title: 'Template Name',
            description: 'Add a name for the content you will select.',
            type: 'string'
        },
        {
            name: 'templateElements',
            description: 'Elements are created at the `Page Content` tab.',
            type: 'reference',
            to: [
              { type: 'addNavMenu' },
              { type: 'addHeader' },
              { type: 'addFooter' },
              { type: 'addTable' },
              { type: 'addTextOnly' },
              { type: 'addImageOnly' },
              { type: 'addImageText' },
              { type: 'addSocialLink' }
            ]      
        }
    ]
}