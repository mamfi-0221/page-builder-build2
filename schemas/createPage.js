/*
*   This schema document will be used to create the pages to structure your content. 
*/
import { FiFilePlus } from "react-icons/fi"

export default {
    name: 'createPage',
    title: 'Create Page',
    icon: FiFilePlus,
    type: 'document',
    fields:[
        {
            name: 'pageName',
            title: 'Page Name',
            description: 'Add a name for this page. Example: `About Us`',
            type: 'string'
        },
        {
            name: 'selectTemplate', //reference pageTemplate schema to select from created templates
            title: 'Select Template',
            description: 'Choose from templates. You may also create a new `Page Template` if you don`t want to use the defaults.',
            type: 'reference',
            to: [{ type: 'pageTemplate' }]
        }
    ]
}