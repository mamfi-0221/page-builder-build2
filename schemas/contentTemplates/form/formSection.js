/*
*  This schema object is used to create forms.
*/
import { FiBookmark } from "react-icons/fi"

export default {
    name: 'formSection',
    title: 'Form Section',
    icon: FiBookmark,
    type: 'object',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string' 
        },
        {
            name: 'form',
            title: 'Form',
            description: 'Select form type',
            type: 'string',
            options: {
                list: ['newsletter', 'register', 'contact']
            }
        }
    ]
}