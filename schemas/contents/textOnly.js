/*
*  This schema object is used to add text block content to your page.
*  This object can be manipulated via the `Page templates` document on your studio.
*/
import { FiFileText } from "react-icons/fi"

export default {
    name: 'addTextOnly',
    title: 'Add Text Only',
    icon: FiFileText,
    type: 'document',
    fields: [
        {
            name: 'blockName',
            title: 'Block name',
            description: 'Add a name to label this text block. Example: `Contact details`',
            type: 'string'
        },
        {
            name: 'text',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}