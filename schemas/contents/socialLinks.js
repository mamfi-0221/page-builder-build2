/*
*   This schema document enables adding social links such as social media platforms and other content sites. 
*/

import { FiMessageCircle,
         FiUserPlus,
         FiFacebook,
         FiInstagram,
         FiTwitter } from "react-icons/fi"

export default {
    name: 'addSocialLink',
    title: 'Add Social Link',
    icon: FiMessageCircle,
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title', 
            type: 'string'
        },
        {
            name: 'socialLinkItems',
            title: 'Social Link Items',
            type: 'array',
            of: [
                { type: 'addFacebook' },
                { type: 'addInstagram' },
                { type: 'addTwitter' },
                { type: 'addLinkedIn' },
                { type: 'addMoreLinks' }
            ]
        }
    ]
}