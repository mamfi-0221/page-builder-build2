/*
*  This schema object is used to add text block content to your page.
*  This object can be manipulated via the `Page templates` document on your studio.
*/
import { FiFileText } from "react-icons/fi"
import { template1, template2, template3 } from '../contentTemplates/blog/blog_template/blog'

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
            name: 'blogTemplate',
            title: 'Blog Templates',
            description: 'Select a template for your blog content.',
            type: 'visualOptions',
            options: {
                showTooltip: true,
                optionSize: "large",
                list: {
                    item1: {
                        name: "Blog Template 1",
                        icon: template1
                    },
                    item2: {
                        name: "Blog Template 2",
                        icon: template2
                    },
                    item3: {
                        name: "Blog Template 3",
                        icon: template3
                    }
                }
            }
        },
        {
            name: 'modifyBlog',
            title: 'Modify Blog Template',
            type: 'blogSection'
        }
    ],
    preview: {
        select: {
            title: 'blogName',
            content: 'modifyBlog.addHeading',
            author: 'modifyBlog.addAuthor',
            media: 'modifyBlog.addImage' 
        },
        prepare(selection) {
            const {title, content, author, media} = selection

            return {
                title: title,
                subtitle: `${content} by: ${author}`,
                media: media
            }
        }
    } 
}