/*
 *  This schema object is used to add/create header content for your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiChevronsUp } from "react-icons/fi"

export default {
    name: 'addHeader',
    title: 'Add Header',
    icon: FiChevronsUp,
    type: 'document',
    fields:[
        {
            name: 'headerName',
            title: 'Header Name',
            description: 'Add a name to identify this header. Example: `Business logo and name`',
            type: 'string'
        },
        {
            name: 'addBrand',
            title: 'Add Brand',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessiblity.',
                    options: {
                        isHighlighted: true
                    },
                },
            ],
            options: {
                hotspot: true
            }
        },
        {
            name: 'addSocial',
            title: 'Add Social Links',
            type: 'reference',
            to: [{ type: 'addSocialLink' }]
        },
        {
            name: 'addJustText',
            title: 'Add Just Text',
            type: 'string'
        }
    ]
}