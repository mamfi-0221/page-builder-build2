/*
 * This schema object allows adding other social links. 
 */

import { FiUserPlus } from "react-icons/fi"

export default {
    name: 'addMoreLinks',
    title: 'Add More Social Links',
    icon: FiUserPlus,
    type: 'object',
    fields: [
        {
            name: 'socialMediaPlatform',
            type: 'string',
            description: 'Example: Tiktok',
            validation: Rule => Rule.custom(title => {
                if(title.match(/facebook|fb/gi) || title.match(/instagram|ig/gi) || title.match(/twitter/gi)) {
                return "PLEASE ADD ANOTHER SOCIAL MEDIA PLATFORM NOT ON THE LIST"
                // do not allow duplication of primary social media accounts
                }
                return true
            })
        },
        {
            name: 'socialMediaAccount',
            type: 'string',
            description: 'Your social media account username.'
        },
        {
            name: 'link',
            type: 'url'
        },
        {
            name: 'displayType',
            type: 'string',
            description: 'How will people see the accounts for them to click.',
            options: {
                layout: 'radio',
                list: ['logo', 'link']
            } 
        }
    ],
    preview: {
        select: {
            title: 'socialMediaPlatform',
            account: 'socialMediaAccount'
        },
        prepare({title, account}) {
        return {
            title: title ? `${title}` : 'No social media platform added',
            subtitle: account ? `${account}` : `No social media account added`
            }
        }
    }
}