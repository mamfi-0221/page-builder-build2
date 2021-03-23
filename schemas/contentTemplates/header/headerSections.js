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
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'addImage',
            title: 'Add Header Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'addButton',
            title: 'Add Button',
            type: 'array',
            of: [{ type: 'headerButton' }]
        }
    ],
    preview: {
        select: {
            blocks: 'addSubtitle',
        },
        prepare(value){
            const block = (value.blocks || []).find(block._type === 'block')
            return{
                subtitle: block ? block.children
                            .filter(child => child._type === 'span')
                            .map(span => span.text)
                            .join('') : 'No text',
            }
        }
    }
}