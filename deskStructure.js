import S from '@sanity/desk-tool/structure-builder'
import { FiFolderPlus,
         FiGrid,
         FiHome,
         FiTool,
         FiNavigation,
         FiPackage } from "react-icons/fi"

const hiddenDocTypes = (listItem) => 
![ 'mainPage', 
   'createPage', 
   'addNavMenu',
   'brandContent'].includes(listItem.getId())

export default () =>
    S.list()
     .title('Creating a website')
     .items([
       S.listItem()
        .title('Main Page')
        .schemaType('mainPage')
        .icon(FiHome)
        .child(
          S.document()
           .title()
            .schemaType('mainPage')
            .documentId('mainPage')
            .views([S.view.form()])
        ),
       S.listItem()
        .title('Page Builder')
        .icon(FiTool)
        .child(
          S.list()
           .title('Content Elements')
           .items([
               S.listItem()
                .title('Create Web page')
                .schemaType('createPage')
                .icon(FiFolderPlus)
                .child(
                    S.documentTypeList('createPage')
                ),
               S.listItem()
                .title('Elements')
                .icon(FiGrid)
                .child(
                   S.list()
                    .title('All Elements')
                    .items([
                        S.listItem()
                         .title('Navigation Menu')
                         .schemaType('addNavMenu')
                         .icon(FiNavigation)
                         .child(
                            S.documentTypeList('addNavMenu').title('All menus')
                        ),
                        S.listItem()
                         .title('Brand/Logo Content')
                         .schemaType('brandContent')
                         .icon(FiPackage)
                         .child(
                            S.documentTypeList('brandContent').title('All brand/logo contents')
                        )
                    ])
                ),
           ])
       ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
     ])