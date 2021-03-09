/*
 * This schema object allows adding a LinkedIn profile.
 */

import { FiLinkedin } from "react-icons/fi"

export default {
    name: 'addLinkedIn',
    title: 'Add LinkedIn Profile',
    icon: FiLinkedin,
    type: 'object',
    fields: [
        {
            name: 'userAccount',
            title: 'User Account',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'displayType',
            title: 'Display Type',
            type: 'string',
            description: 'How will people see the accounts for them to click.',
            options: {
                layout: 'radio',
                list: ['logo', 'link']
            } 
        }
    ]
}