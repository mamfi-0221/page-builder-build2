import S from '@sanity/desk-tool/structure-builder'
import { FiFilePlus, 
         FiGrid,
         FiMenu,
         FiChevronsUp,
         FiChevronsDown,
         FiImage,
         FiClipboard,
         FiColumns,
         FiFileText,
         FiMessageSquare,
         FiHome } from "react-icons/fi"

const hiddenDocTypes = (listItem) => 
!['mainPage', 
   'createPage', 
   'addImageText', 
   'addNavMenu', 
   'addTable', 
   'addFooter', 
   'addHeader', 
   'addImageOnly', 
   'addTextOnly', 
   'addSocialLink'].includes(listItem.getId())

export default () =>
    S.list()
     .title('Content')
     .items([
       S.documentListItem()
        .title('Main Page')
        .schemaType('mainPage')
        .icon(FiHome)
        .child(
          S.document()
            .schemaType('mainPage')
            .documentId('mainPage')
            .views([S.view.form()])
        ),
       S.listItem()
        .title('Page Content')
        .icon(FiGrid)
        .child(
           S.list()
            .title('Content Selection')
            .items([
               S.listItem()
                 .title('Images')
                 .schemaType('addImageOnly')
                 .icon(FiImage)
                 .child(
                    S.documentTypeList('addImageOnly').title('Added Images')
                ),
                S.listItem()
                 .title('Navigation Menus')
                 .schemaType('addNavMenu')
                 .icon(FiMenu)
                 .child(
                    S.documentTypeList('addNavMenu').title('Created menus')
                ),
                S.listItem()
                 .title('Page Footers')
                 .schemaType('addFooter')
                 .icon(FiChevronsDown)
                 .child(
                    S.documentTypeList('addFooter').title('Created footers')
                ),
                S.listItem()
                 .title('Page Headers')
                 .schemaType('addHeader')
                 .icon(FiChevronsUp)
                 .child(
                    S.documentTypeList('addHeader').title('Created headers')
                ),
                S.listItem()
                 .title('Social Links')
                 .schemaType('addSocialLink')
                 .icon(FiMessageSquare)
                 .child(
                     S.document()
                     .schemaType('addSocialLink')
                     .documentId('addSocialLink')
                     .views([S.view.form()])
                ),
                S.listItem()
                 .title('Tables')
                 .schemaType('addTable')
                 .icon(FiColumns)
                 .child(
                    S.documentTypeList('addTable').title('Created tables')
                ),
                S.listItem()
                 .title('Text')
                 .schemaType('addTextOnly')
                 .icon(FiFileText)
                 .child(
                    S.documentTypeList('addTextOnly').title('Added text blocks')
                )
            ])
        ),
      //  S.listItem()
      //   .title('Page Template')
      //   .schemaType('pageTemplate')
      //   .icon(FiLayout)
      //   .child(
      //     S.documentList('pageTemplate')
      //      .title('All templates')
      //      .menuItems(S.documentTypeList('pageTemplate').getMenuItems())
      //      .filter('_type == "pageTemplate"')
      //   ),
       S.listItem()
        .title('Create Page')
        .schemaType('createPage')
        .icon(FiFilePlus)
        .child(
          S.documentList('createPage')
           .title('All pages')
           .menuItems(S.documentTypeList('createPage').getMenuItems())
           .filter('_type == "createPage" && _id != "mainPage"')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
     ])