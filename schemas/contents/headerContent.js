/*
 *  This schema object is used to add/create header content for your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiChevronsUp } from "react-icons/fi"
import { template1, template2, template3 } from '../contentTemplates/header/header_template/header'

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
            name: 'headerTemplate',
            title: 'Header Templates',
            description: 'Select a template for your header content.',
            type: 'visualOptions',
            options: {
                showTooltip: true,
                optionSize: "large",
                list: {
                    item1: {
                        name: "Header Template 1",
                        icon: template1
                    },
                    item2: {
                        name: "Header Template 2",
                        icon: template2
                    },
                    item3: {
                        name: "Header Template 3",
                        icon: template3
                    }
                }
            }
        },
        {
            name: 'modifyHeader',
            title: 'Modify Template',
            type: 'headerSections'
        }
    ],
    preview: {
        select: {
            title: 'headerName',
            media: 'modifyHeader.addImage',
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