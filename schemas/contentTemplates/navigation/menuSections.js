export default {
name: 'navMenuItems',
type: 'object',
fieldsets: [
    {
    title: 'Link',
    name: 'link',
    description: 'Only the first value of these will be used'
    }
],
fields: [
    {
      name: 'itemName',
      title: 'Item Name',
      type: 'string'
    },
    {
      name: 'linkPage',
      title: 'Link Page',
      type: 'reference',
      fieldset: 'link',
      to: [{ type: 'createPage' }]
    },
    {
        name: 'link',
        title: 'External Link',
        fieldset: 'link',
        description: 'Example: https://www.sanity.io',
        type: 'url'
    },
    {
        name: 'menuType',
        title: 'Menu Type',
        type: 'string',
        description: 'How do you want the menu options to look.',
        options: {
            layout: 'radio',
            list: ['button', 'link']
        }
    }
  ]
}