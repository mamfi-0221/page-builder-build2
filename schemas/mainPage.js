/*
*  This schema is used to structure content on your web page.
*  It references content items created in `Create Content`.
*/
import { template1, template2 } from "./contentTemplates/navigation/navigation_template/navigation"

export default {
    name: 'mainPage',
    title: 'Main Page',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fieldsets: [
        {
            name: 'setNavMenu',
            title: 'Set Navigation Menu',
            type: 'string'        
        }
    ],
    fields: [
        {
            name: 'websiteName',
            title: 'Website Name',
            description: 'Add a name to your website.',
            type: 'string'
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