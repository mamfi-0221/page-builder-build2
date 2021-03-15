/*
 *  This schema object is used to add an image as content to your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiImage } from "react-icons/fi"

export default {
    name: 'portfolio',
    title: 'Portfolio',
    icon: FiImage, 
    type: 'object',
    fields: [
        {
            name: 'portfolioName',
            title: 'Portfolio Name',
            type: 'string'
        },
        {
            name: 'selectTemplate',
            title: 'Portfolio Template',
            description: 'Select a template for your portfolio content.',
            type: 'reference',
            to: [{ type: 'portfolioTemplate' }]
        },
        {
            name: 'modifyTemplate',
            title: 'Modify Portfolio Template',
            type: 'portfolioSection'
        }
    ],
    preview: {
        select: {
        title: 'portfolioName',
        media: 'selectTemplate.portfolioTemplate' //imageContent thumbnail
        },
        prepare(selection) {
            const {title, media} = selection

            return {
                title: title,
                media: media
            }
        }
    } 
}