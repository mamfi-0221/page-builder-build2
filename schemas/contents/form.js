/*
*  This schema object is used to add forms to your page.
*  
*/
import { FiFolderMinus } from "react-icons/fi"

export default {
    name: 'form',
    title: 'Form',
    icon: FiFolderMinus,
    type: 'object',
    fields: [
        {
            name: 'formName',
            title: 'Form name',
            description: 'Add a name for this form.',
            type: 'string'
        },
        {
            name: 'addFormTemplate',
            title: 'Form Template',
            description: 'Select a template for your form content.',
            type: 'reference',
            to: [{ type: 'formTemplate' }]
        },
        {
            name: 'modifyTemplate',
            title: 'Modify Form Template',
            type: 'formSection'
        }
    ],
    preview: {
        select: {
            title: 'formName',
            media: 'addFormTemplate.formTemplate' 
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