/*
*  This schema object is used to create forms.
*/
import { FiSend } from "react-icons/fi"

export default {
    name: 'contactSection',
    title: 'Contact Section',
    icon: FiSend,
    type: 'object',
    fields: [
        {
            name: 'headerText',
            title: 'Header Text',
            type: 'string'
        },
        {
            name: 'addContactImg',
            title: 'Add Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'officeAdd',
            title: 'Office Address',
            type: 'array',
            of: [{ type: 'block' }] 
        },
        {
            name: 'telNumber',
            title: 'Telephone',
            type: 'number'
        },
        {
            name: 'emailAdd',
            title: 'Email Address',
            type: 'string'
        }
    ]
}