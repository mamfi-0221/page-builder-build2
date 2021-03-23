/*
*   This schema document will be used to create the pages to structure your content. 
*/
import { FiFilePlus } from "react-icons/fi"
import { template1, template2 } from "./contentTemplates/navigation/navigation_template/navigation"

export default {
    name: 'createPage',
    title: 'Page',
    icon: FiFilePlus,
    type: 'document',
    fieldsets: [
        {
            name: 'setNavMenu',
            title: 'Set Navigation Menu',
            type: 'string'        
        }
    ],
    fields:[
        {
            name: 'pageName',
            title: 'Page Name',
            description: 'Add a name for this page. Example: `About Us`',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'pageSlugGenerator',
            title: 'Page Slug Generator',
            type: 'slug',
            description: `Click "Generate". The 'slug' is part of the website url.`,
            validation: Rule => Rule.required(),
            options: {
                source: 'pageName',
                maxLength: 96,
            }
        },
        {
            name: 'navMenuTemplates',
            title: 'Navigation Menu Templates',
            description: 'Select a template for your navigation menu.',
            fieldset: 'setNavMenu',
            type: 'visualOptions',
            options: {
                showTooltip: true,
                optionSize: "large",
                list: {
                    item1: {
                        name: "Menu Template 1",
                        icon: template1
                    },
                    item2: {
                        name: "Menu Template 2",
                        icon: template2
                    }
                }
            }
        },
        {
            name: 'navigationMenu',
            title: 'Navigation Menu',
            description: 'Go to Navigation Menu tab if you want to create a navigation menu for this page.',
            fieldset: 'setNavMenu',
            type: 'reference',
            to: [{ type: 'addNavMenu' }]
        },
        {
            name: 'addContent',
            title: 'Add content for this page.',
            type: 'array',
            of: [
                { type: 'addHeader' },
                { type: 'addFooter' },
                { type: 'portfolio' },
                { type: 'blog' },
                { type: 'contactUs' },
                { type: 'signUp' }
            ],
            options: {
                editModal: 'fullscreen'
            }
        }
    ]
}