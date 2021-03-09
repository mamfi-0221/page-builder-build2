/*
*   This schema document will be used to create the pages to structure your content. 
*/
import { FiFilePlus } from "react-icons/fi"

export default {
    name: 'createPage',
    title: 'Page',
    icon: FiFilePlus,
    type: 'document',
    fields:[
        {
            name: 'pageName',
            title: 'Page Name',
            description: 'Add a name for this page. Example: `About Us`',
            type: 'string',
            validation: Rule => Rule.custom(name => {
                if (typeof name === 'undefined') {
                    return true //allow undefined values to prevent error
                }
                if (name.match(/Home|Main|Landing/gi)) {
                   return "Please be more creative. Main page already exists."
                }   
                return true  
            })
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'pageName',
                maxLength: 96,
            }
        },
        {
            name: 'addContent',
            title: 'Add Content',
            description: `Select content you want for this page. 
                          To create content, go to the 'Create Content' tab.`,
            type: 'array', //this shows a dropdown of contents user can select from 
            of: [{ type: 'pageContent' }]
        }
    ]
}