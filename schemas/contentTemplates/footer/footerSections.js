export default {
    name: 'footerSections',
    title: 'Footer Sections',
    type: 'object',
    fields: [
        {
            name: 'addBrand',
            title: 'Add Brand/Logo content',
            description: 'Select from the brands/logos created at Page Builder > "Brand/Logo Content" section.',
            type: 'reference',
            to: [{ type: 'brandContent' }]
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