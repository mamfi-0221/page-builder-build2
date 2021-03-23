// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import document schemas
import mainPage from './mainPage'
import createPage from './createPage'
import addFooter from './contents/footerContent'
import addHeader from './contents/headerContent'
import portfolio from './contents/portfolio'
import addNavMenu from './contents/navMenu'
import blog from './contents/blog'
import addSocialLink from './contents/socialLinks'
import brandContent from './contents/brandContent'

// import object content schemas
import addFacebook from './contents/socialLinks/addFacebook'
import addInstagram from './contents/socialLinks/addInstagram'
import addTwitter from './contents/socialLinks/addTwitter'
import addLinkedIn from './contents/socialLinks/addLinkedIn'
import addMoreLinks from './contents/socialLinks/addMoreLinks'
import contactUs from './contents/contactUs'
import signUp from './contents/signUp'

//import template and section schemas
import blogSections from './contentTemplates/blog/blogSection'
import portfolioSection from './contentTemplates/portfolio/portfolioSection'
import portfolioImage from './contentTemplates/portfolio/portfolioImage'
import headerSections from './contentTemplates/header/headerSections'
import headerButton from './contentTemplates/header/headerButton'
import navMenuItems from './contentTemplates/navigation/menuSections'
import footerSections from './contentTemplates/footer/footerSections'
import contactSection from './contentTemplates/contact/contactSection'
import signUpSection from './contentTemplates/signUp/signUpSection'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types
    mainPage,
    createPage,
    brandContent,

    // object (content) types
    addFacebook,
    addInstagram,
    addTwitter,
    addLinkedIn,
    addMoreLinks,
    addFooter,
    addHeader,
    portfolio,
    addNavMenu,
    blog,
    addSocialLink,
    contactUs,
    signUp,

    // object (template) types
    blogSections,
    portfolioSection,
    portfolioImage,
    headerSections,
    headerButton,
    navMenuItems,
    footerSections,
    contactSection,
    signUpSection, 
  ]),
})
