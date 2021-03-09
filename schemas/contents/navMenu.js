/*
*   This schema object will be used to create navigation menus that will link pages.
*   Multiple menus can be created and may be referenced to. 
*/
import { FiMenu } from "react-icons/fi"

export default {
    name: 'addNavMenu',
    title: 'Add Navigation Menu',
    icon: FiMenu,
    type: 'document',
    fields: [
        {
            name: 'menuName',
            title: 'Menu Name',
            description: 'Add a name to this navigation to describe what it will be for. Example: `NavMenu for About Us`',
            type: 'string'
        },
        {
            name: 'menuItems',
            title: 'Menu Items',
            description: 'Add the pages you want to link using this menu.',
            type: 'array',
            of: [{ type: 'navMenuItems' }]
        }
    ]
}