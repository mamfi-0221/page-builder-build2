/*
*  This schema is used to structure content on your web page.
*  It references content items created in `Create Content`.
*/
import { FiLayout } from "react-icons/fi"

export default {
    name: 'pageTemplate',
    title: 'Page Template',
    icon: FiLayout,
    type: 'document',
    fields: [
        {
            name: 'templateName',
            title: 'Template Name',
            description: 'Add a name to your template to easily identify what it will be used for. Example: About Us template',
            type: 'string'
        },
        {
            name: 'addContent',
            title: 'Add Content',
            description: 'Select content you want for this template.',
            type: 'array', //this shows a dropdown of contents user can select from 
            of: [{ type: 'templateContent' }]
        }
    ]
}