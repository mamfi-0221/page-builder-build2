/*
 * This schema object allows adding an instagram profile.
 */

import { FiInstagram } from "react-icons/fi"

export default {
    name: 'addInstagram',
    title: 'Add Instagram Profile',
    icon: FiInstagram,
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