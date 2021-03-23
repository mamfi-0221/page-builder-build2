/*
*  This schema object is used to add forms to your page.
*  
*/
import { FiSend } from "react-icons/fi"
import { contactTemp1, contactTemp2 } from '../contentTemplates/contact/contact_template/contact'

export default {
    name: 'contactUs',
    title: 'Contact Us',
    icon: FiSend,
    type: 'object',
    fields: [
        {
            name: 'contactTemplate',
            title: 'Contact Templates',
            description: 'Select a template for your contact us content.',
            type: 'visualOptions',
            options: {
                showTooltip: true,
                optionSize: "large",
                list: {
                    item1: {
                        name: "Contact Us Template 1",
                        icon: contactTemp1
                    },
                    item2: {
                        name: "Contact Us Template 2",
                        icon: contactTemp2
                    }
                }
            }
        },
        {
            name: 'modifyForm',
            title: 'Modify Template',
            type: 'contactSection'
        }
    ],
    preview: {
        select: {
            title: 'modifyForm.headerText',
            media: 'modifyForm.addContactImg' 
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