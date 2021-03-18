/*
*  This schema object is used to add text block content to your page.
*  This object can be manipulated via the `Page templates` document on your studio.
*/
import { FiFileText } from "react-icons/fi"

export default {
    name: 'blog',
    title: 'Blog Content',
    icon: FiFileText,
    type: 'object',
    fields: [
        {
            name: 'blogName',
            title: 'Blog name',
            description: 'Add a name for this blog post.',
            type: 'string'
        },
        {
            name: 'addBlogTemplate',
            title: 'Blog Template',
            description: 'Select a template for your blog content.',
            type: 'reference',
            to: [{ type: 'blogTemplate' }]
        },
        {
            name: 'modifyTemplate',
            title: 'Modify Blog Template',
            type: 'blogSection'
        }
    ],
    preview: {
        select: {
            title: 'blogName',
            media: 'addBlogTemplate.blogTemplate' 
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