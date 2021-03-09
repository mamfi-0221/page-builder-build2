/*
 *  This schema object is used to add an image and text row as content to your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiClipboard } from "react-icons/fi"

export default {
    name: 'addImageText',
    title: 'Add Image with Text',
    icon: FiClipboard,
    type: 'document',
    fields: [
        {
            name: 'contentTitle',
            title: 'Content Title',
            type: 'string'
        },
        {
            name: 'contentItems',
            type: 'textImageContent'
        }
    ]
}