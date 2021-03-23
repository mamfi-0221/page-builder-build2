/*
 *  This schema object is used to add an image as content to your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiImage } from "react-icons/fi"
import { template1, template2, template3 } from '../contentTemplates/portfolio/portfolio_template/portfolio'

export default {
    name: 'portfolio',
    title: 'Portfolio',
    icon: FiImage, 
    type: 'object',
    fields: [
        {
            name: 'portfolioName',
            title: 'Portfolio Name',
            type: 'string'
        },
        {
            name: 'portfolioTemplate',
            title: 'Portfolio Templates',
            description: 'Select a template for your portfolio content.',
            type: 'visualOptions',
            options: {
                showTooltip: true,
                optionSize: "large",
                list: {
                    item1: {
                        name: "Portfolio Template 1",
                        icon: template1
                    },
                    item2: {
                        name: "Portfolio Template 2",
                        icon: template2
                    },
                    item3: {
                        name: "Portfolio Template 3",
                        icon: template3
                    }
                }
            }
        },
        {
            name: 'modifyPortfolio',
            title: 'Modify Portfolio Template',
            type: 'portfolioSection'
        }
    ],
    preview: {
        select: {
        title: 'portfolioName',
        content: 'modifyPortfolio.headerText',
        subText: 'modifyPortfolio.headerSubtitle',
        media: 'modifyPortfolio.imageContent[0].addImage' //imageContent thumbnail
        },
        prepare(selection) {
            const {title, content, subText, media} = selection

            return {
                title: title,
                subtitle: `${content} | ${subText}`,
                media: media
            }
        }
    } 
}