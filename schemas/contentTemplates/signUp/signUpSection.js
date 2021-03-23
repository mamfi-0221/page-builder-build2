/*
*  This schema object is used to create forms.
*/
import { FiLogIn } from "react-icons/fi"

export default {
    name: 'signUpSection',
    title: 'Sign Up Section',
    icon: FiLogIn,
    type: 'object',
    fields: [
        {
            name: 'addBrand',
            title: 'Add Brand/Logo content',
            description: 'Select from the brands/logos created at "Brand/Logo Content" section.',
            type: 'reference',
            to: [{ type: 'brandContent' }]
        },
        {
            name: 'headerText',
            title: 'Header Text',
            type: 'string'
        },
        {
            name: 'subText',
            title: 'Sub text',
            type: 'string'
        }
    ]
}