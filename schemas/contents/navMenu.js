/*
*   This schema object will be used to create navigation menus that will link pages.
*   Multiple menus can be created and may be referenced to. 
*/
import { FiMenu } from "react-icons/fi"

export default {
    name: 'addNavMenu',
    title: 'Add Navigation Menu',
    icon: FiMenu,
    type: 'object',
    fields: [
        {
            name: 'menuName',
            title: 'Menu Name',
            description: 'Add a name to quickly identify what this navigation menu is for.',
            type: 'string'
        },
        {
            name: 'addMenuTemplate',
            title: 'Menu Template',
            description: 'Select a template for your navigation menu.',
            type: 'reference',
            weak: true,
            to: [{ type: 'menuTemplate' }]
        },
        {
            name: 'modifyMenu',
            title: 'Modify Menu Template',
            type: 'navMenuItems'
        }
    ],
    preview: {
        select: { 
            title: 'menuName',
            media: 'menuTemplate.templateImg' 
        },
        prepare(selection) {
            const {title, media} = selection

            return {
                title: title,
                media: media
            }
        }
    }
}