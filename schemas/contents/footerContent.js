/*
*  This schema is used to add or create a footer and supplement content at the bottom of your page.
*  Multiple instances can be created and may be referenced to.
*/
import { FiChevronsDown } from "react-icons/fi"

export default {
    name: 'addFooter',
    title: 'Add Footer',
    icon: FiChevronsDown,
    type: 'document',
    fields: [
        {
            name: 'footerName',
            title: 'Footer Name',
            description: 'Add a name to identify this footer. Example `Business links`',
            type: 'string'
        },
        {
            name: 'addJustText',
            title: 'Add Just Text',
            type: 'string',
        },
        {
            name: 'addSocial',
            title: 'Add Social Links',
            type: 'reference',
            to: [{ type: 'addSocialLink' }]
        }
    ]
}