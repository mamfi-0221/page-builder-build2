/*
*   This schema object will be used to create navigation menus that will link pages.
*   Multiple menus can be created and may be referenced to. 
*/
import { FiMenu } from "react-icons/fi"

export default {
    name: 'addNavMenu',
    title: 'Navigation Menu',
    icon: FiMenu,
    type: 'document',
    fields: [
        {
            name: 'menuName',
            title: 'Menu Name',
            description: 'Add a name to quickly identify what this navigation menu is for.',
            type: 'string'
        },
        {
            name: 'addBrand',
            title: 'Add Brand/Logo content',
            description: 'Select from the brands/logos created at "Brand/Logo Content" section.',
            type: 'reference',
            to: [{ type: 'brandContent' }]
        },
        {
            name: 'items',
            title: 'Items',
            description: 'Add web pages as navigation items',
            type: 'array',
            of: [{ type: 'navMenuItems' }]
        }
    ],
    preview: {
        select: { 
            title: 'menuName',
            media: 'addBrand.addImage' 
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