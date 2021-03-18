/*
 *  This schema object is used to add/create header content for your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiChevronsUp } from "react-icons/fi"

export default {
    name: 'addHeader',
    title: 'Header',
    icon: FiChevronsUp,
    type: 'object',
    fields:[
        {
            name: 'headerName',
            title: 'Header Name',
            description: 'Add a name to identify this header. Example: `Business logo and name`',
            type: 'string'
        },
        {
            name: 'addHeaderTemplate',
            title: 'Header Templates',
            description: 'Select a template for your header.',
            type: 'reference',
            to: [{ type: 'headerTemplate' }]
        },
        {
            name: 'modifyTemplate',
            title: 'Modify Template',
            type: 'headerSections'
        }
    ],
    preview: {
        select: {
            title: 'headerName',
            media: 'headerTemplate.addHeaderTemplate',
        },
        prepare(selection){
            const {title, media} = selection
            return{
                title: title,
                media: media
            }
        }
    }
}