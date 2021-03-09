// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import document schemas
import pageTemplate from './pageTemplate'
import createPage from './createPage'
import addFooter from './contents/footerContent'
import addHeader from './contents/headerContent'
import addImageOnly from './contents/imageOnly'
import addImageText from './contents/imageText'
import addNavMenu from './contents/navMenu'
import addTable from './contents/tableContent'
import addTextOnly from './contents/textOnly'
import addSocialLink from './contents/socialLinks'

// import object schemas
import templateContent from './contents/pageTempElements'
import navMenuItems from './contents/navMenuItems'
import addFacebook from './contents/socialLinks/addFacebook'
import addInstagram from './contents/socialLinks/addInstagram'
import addTwitter from './contents/socialLinks/addTwitter'
import addLinkedIn from './contents/socialLinks/addLinkedIn'
import addMoreLinks from './contents/socialLinks/addMoreLinks'

import textImageContent from './contents/richtextImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types
    pageTemplate,
    createPage,
    addFooter,
    addHeader,
    addImageOnly,
    addImageText,
    addNavMenu,
    addTable,
    addTextOnly,
    addSocialLink,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    templateContent,
    navMenuItems,
    addFacebook,
    addInstagram,
    addTwitter,
    addLinkedIn,
    addMoreLinks,
    textImageContent,
  ]),
})