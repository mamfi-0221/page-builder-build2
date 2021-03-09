/*
 * This schema object allows adding a twitter profile.
 */

import { FiTwitter } from "react-icons/fi"

export default {
    name: 'addTwitter',
    title: 'Add Twitter Profile',
    icon: FiTwitter,
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