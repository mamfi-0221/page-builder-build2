// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import document schemas
import yourWebsite from './mainPage'
import createPage from './createPage'
import addFooter from './contents/footerContent'
import addHeader from './contents/headerContent'
import portfolio from './contents/portfolio'
import addNavMenu from './contents/navMenu'
import blog from './contents/blog'
import addSocialLink from './contents/socialLinks'
import form from './contents/form'

// import object content schemas
import addFacebook from './contents/socialLinks/addFacebook'
import addInstagram from './contents/socialLinks/addInstagram'
import addTwitter from './contents/socialLinks/addTwitter'
import addLinkedIn from './contents/socialLinks/addLinkedIn'
import addMoreLinks from './contents/socialLinks/addMoreLinks'

//import template and section schemas
import blogTemplate from './contentTemplates/blog/blogTemplate'
import blogSections from './contentTemplates/blog/blogSection'
import portfolioTemplate from './contentTemplates/portfolio/portfolioTemplate'
import portfolioSection from './contentTemplates/portfolio/portfolioSection'
import portfolioImage from './contentTemplates/portfolio/portfolioImage'
import headerTemplate from './contentTemplates/header/headerTemplate'
import headerSections from './contentTemplates/header/headerSections'
import menuTemplate from './contentTemplates/navigation/menuTemplate'
import navMenuItems from './contentTemplates/navigation/menuSections'
import footerTemplate from './contentTemplates/footer/footerTemplate'
import footerSections from './contentTemplates/footer/footerSections'
import formSection from './contentTemplates/form/formSection'
import formTemplate from './contentTemplates/form/formTemplate'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types
    yourWebsite,
    createPage,
    addFooter,
    addHeader,
    portfolio,
    addNavMenu,
    blog,
    addSocialLink,
    form,

    // object (content) types
    addFacebook,
    addInstagram,
    addTwitter,
    addLinkedIn,
    addMoreLinks,

    // object (template) types
    blogSections,
    blogTemplate,
    portfolioSection,
    portfolioTemplate,
    portfolioImage,
    headerSections,
    headerTemplate,
    navMenuItems,
    menuTemplate,
    footerSections,
    footerTemplate,
    formSection, 
    formTemplate
  ]),
})
