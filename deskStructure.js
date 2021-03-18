import S from '@sanity/desk-tool/structure-builder'
import { FiLayout,
         FiFolderPlus,
         FiGrid,
         FiMenu,
         FiChevronsUp,
         FiChevronsDown,
         FiImage,
         FiFileText,
         FiHome,
         FiTool,
         FiNavigation,
         FiPackage } from "react-icons/fi"

const hiddenDocTypes = (listItem) => 
![ 'mainPage', 
   'createPage', 
   'addNavMenu',
   'blogTemplate',
   'footerTemplate',
   'portfolioTemplate',
   'headerTemplate',
   'menuTemplate',
   'formTemplate',
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
               S.listItem()
                .title('Templates')
                .icon(FiLayout)
                .child(
                    S.list()
                     .title('All templates')
                     .items([
                        S.listItem()
                         .title('Navigation')
                         .schemaType('menuTemplate')
                         .icon(FiMenu)
                         .child(
                            S.documentTypeList('menuTemplate')
                        ),
                        S.listItem()
                         .title('Page Footer')
                         .schemaType('footerTemplate')
                         .icon(FiChevronsDown)
                         .child(
                            S.documentTypeList('footerTemplate')
                        ),
                        S.listItem()
                         .title('Page Header')
                         .schemaType('headerTemplate')
                         .icon(FiChevronsUp)
                         .child(
                            S.documentTypeList('headerTemplate')
                        ),
                        S.listItem()
                         .title('Portfolio')
                         .schemaType('portfolioTemplate')
                         .icon(FiImage)
                         .child(
                            S.documentTypeList('portfolioTemplate')
                        ),
                        S.listItem()
                         .title('Blog')
                         .schemaType('blogTemplate')
                         .icon(FiFileText)
                         .child(
                            S.documentTypeList('blogTemplate')
                        ),
                        S.listItem()
                         .title('Form')
                         .schemaType('formTemplate')
                         .icon(FiFileText)
                         .child(
                            S.documentTypeList('formTemplate')
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