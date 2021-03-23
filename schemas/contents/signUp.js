/*
*  This schema object is used to add forms to your page.
*  
*/
import { FiLogIn } from "react-icons/fi"
import { signTemp1, signTemp2 } from '../contentTemplates/signUp/signUp_template/signUp'

export default {
    name: 'signUp',
    title: 'Sign Up',
    icon: FiLogIn,
    type: 'object',
    fields: [
        {
            name: 'signUpTemplate',
            title: 'Sign Up Templates',
            description: 'Select a template for your sign up content.',
            type: 'visualOptions',
            options: {
                showTooltip: true,
                optionSize: "large",
                list: {
                    item1: {
                        name: "Sign Up Template 1",
                        icon: signTemp1
                    },
                    item2: {
                        name: "Sign Up Template 2",
                        icon: signTemp2
                    }
                }
            }
        },
        {
            name: 'modifyField',
            title: 'Modify Template',
            type: 'signUpSection'
        }
    ],
    preview: {
        select: {
            title: 'modifyField.headerText',
            sub: 'modifyField.subText',
            media: 'modifyField.addBrand' 
        },
        prepare(selection) {
            const {title, sub, media} = selection

            return {
                title: title,
                subtitle: sub,
                media: media
            }
        }
    } 
}