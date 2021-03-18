/*
 *  This schema object is used to add an image as content to your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiImage } from "react-icons/fi"

export default {
    name: 'portfolioSection',
    title: 'Portfolio Section',
    icon: FiImage, 
    type: 'object',
    fields: [
        {
            name: 'headerText',
            title: 'Header Text',
            type: 'string'
        },
        {
            name: 'headerSubtitle',
            title: 'Subtitle Text',
            type: 'string'
        },
        {
            name: 'imageContent',
            title: 'Image Content',
            type: 'array',
            of: [
                { type: 'portfolioImage' }
            ],
            options: {
                layout: 'grid'
            }
        }
    ]
}