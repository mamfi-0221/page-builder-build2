/*
*   This schema document will be used to create the pages to structure your content. 
*/
import { FiFilePlus } from "react-icons/fi"
import React from 'react'

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
            name: 'addContent',
            title: 'Add content for this page.',
            type: 'array',
            of: [
                { type: 'addNavMenu' },
                { type: 'addHeader' },
                { type: 'addFooter' },
                { type: 'portfolio' },
                { type: 'blog' },
                { type: 'form' }
            ]
        }
    ]
}