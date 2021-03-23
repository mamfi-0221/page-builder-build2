/*
*  This schema is used to add or create a footer and supplement content at the bottom of your page.
*  Multiple instances can be created and may be referenced to.
*/
import { FiChevronsDown } from "react-icons/fi"
import { template1, template2, template3 } from '../contentTemplates/footer/footer_template/footer'

export default {
    name: 'addFooter',
    title: 'Footer',
    icon: FiChevronsDown,
    type: 'object',
    fields: [
        {
            name: 'footerName',
            title: 'Footer Name',
            description: 'Add a name to identify this footer. Example `Business links`',
            type: 'string'
        },
        {
            name: 'footerTemplate',
            title: 'Footer Templates',
            description: 'Select a template for your footer content.',
            type: 'visualOptions',
            options: {
                showTooltip: true,
                optionSize: "large",
                list: {
                    item1: {
                        name: "Footer Template 1",
                        icon: template1,
                    },
                    item2: {
                        name: "Footer Template 2",
                        icon: template2,
                    },
                    item3: {
                        name: "Footer Template 3",
                        icon: template3,
                    }
                }
            }
        },
        {
            name: 'modifyFooter',
            title: 'Modify Footer Template',
            type: 'footerSections'
        }
    ],
    preview: 
    {
        select: 
        {
            title: 'footerName',
            text: 'modifyFooter.addSubtitle',
            media: 'modifyFooter.addBrand.addImage'
        },
        prepare(selection)
        {
            const {title, text, media} = selection
            return{
                title: title,
                subtitle: text,
                media: media
            }
        }
    }
}