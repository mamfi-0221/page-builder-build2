/*
*  This schema is used to add or create a footer and supplement content at the bottom of your page.
*  Multiple instances can be created and may be referenced to.
*/
import { FiChevronsDown } from "react-icons/fi"

export default {
    name: 'addFooter',
    title: 'Add Footer',
    icon: FiChevronsDown,
    type: 'object',
    fields: [
        {
            name: 'footerName',
            title: 'Footer Name',
            description: 'Add a name to identify this footer. Example `Business links`',
            type: 'string'
        },
        {
            name: 'addFooterTemplate',
            title: 'Footer Template',
            description: 'Select a template for your footer',
            type: 'reference',
            to: [{ type: 'footerTemplate' }]
        },
        {
            name: 'modifyTemplate',
            title: 'Modify Footer Template',
            type: 'footerSections'
        }
    ],
    preview: 
    {
        select: 
        {
            title: 'footerName',
            media: 'addFooterTemplate.footerTemplate'
        },
        prepare(selection)
        {
            const {title, media} = selection
            return{
                title: title,
                media: media
            }
        }
    }
}