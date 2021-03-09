export default {
  name: 'textImageContent',
  title: 'Text Image Content',
  type: 'object',
  fields: [
    {
        name: 'content',
        type: 'array',
         of: [
            { type: 'block' },
            { type: 'addImageOnly' }
        ]
    }
  ]
}