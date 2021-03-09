/*
*  This is a sub schema of top level schema `addContent` in createPage.
*  This shows the items user can select/add from when creating a page.
*/

export default {
    name: 'pageContent',
    title: 'Page Content',
    type: 'object',
    fields: [
        {
            name: 'contentName',
            title: 'Content Name',
            description: 'Add a name for the content you will select.',
            type: 'string'
        },
        {
            name: 'contentItems',
            description: 'Elements are created at the `Page Content` tab.',
            type: 'reference',
            to: [
              { type: 'addNavMenu' },
              { type: 'addHeader' },
              { type: 'addFooter' },
              { type: 'addTable' },
              { type: 'addTextOnly' },
              { type: 'addImageOnly' }
            ]      
        }
    ]
}