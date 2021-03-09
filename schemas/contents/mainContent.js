/*
*  This is a sub schema of top level schema `mainContents` in mainPage.
*  This shows the items user can select/add from when modifying the main page.
*/

export default {
    name: 'mainContent',
    title: 'Main Content',
    type: 'object',
    fields: [
        {
            name: 'mainContentName',
            title: 'Content Name',
            description: 'Add a name for the content you will select.',
            type: 'string'
        },
        {
            name: 'mainContentItems',
            description: 'Elements are created at the `Page Content` tab.',
            type: 'reference',
            to: [
              { type: 'addHeader' },
              { type: 'addFooter' },
              { type: 'addTable' },
              { type: 'addTextOnly' },
              { type: 'addImageOnly' }
            ]      
        }
    ]
}