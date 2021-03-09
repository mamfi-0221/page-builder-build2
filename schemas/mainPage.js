/*
*  This schema is used to structure content on your web page.
*  It references content items created in `Create Content`.
*/

export default {
    name: 'mainPage',
    title: 'Main page',
    type: 'document',
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            description: 'Add a name to your landing page.',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'The main site url. Used to create canonical url'
        },
        {
            name: 'mainNavigation',
            title: 'Main Navigation',
            description: 'Add the pages you want to link to the main page.',
            validation: Rule => [
                Rule.max(5).warning('Are you sure you want more than 5 items?'),
                Rule.unique().error('You have duplicate menu items'),
            ],
            type: 'array',
            of: [
                { 
                    name: 'linkPage',
                    title: 'Link Page',
                    type: 'reference', 
                    to: [{ type: 'createPage' }]
                }
            ]
        },
        {
            name: 'mainContents',
            title: 'Main Contents',
            description: 'Select content you want for this template.',
            type: 'array', //this shows a dropdown of contents user can select from 
            of: [{ type: 'mainContent' }]
        }
    ]
}