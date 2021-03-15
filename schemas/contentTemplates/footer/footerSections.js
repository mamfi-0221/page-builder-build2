export default {
    name: 'footerSections',
    title: 'Footer Sections',
    type: 'object',
    fields: [
        {
            name: 'itemName',
            title: 'Footer name',
            type: 'string'
        },
        {
            name: 'addBrand',
            title: 'Add Brand',
            description: 'Add a logo or picture to brand your page.',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'addSubtitle',
            title: 'Add footer text',
            type: 'string'
        },
        {
            name: 'socialLinkItems',
            title: 'Social Link Items',
            type: 'array',
            of: [
                { type: 'addFacebook' },
                { type: 'addInstagram' },
                { type: 'addTwitter' },
                { type: 'addLinkedIn' },
                { type: 'addMoreLinks' }
            ]
        }
    ]
}