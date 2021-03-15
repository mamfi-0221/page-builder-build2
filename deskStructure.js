import S from '@sanity/desk-tool/structure-builder'
import { FiFilePlus, 
         FiGrid,
         FiMenu,
         FiChevronsUp,
         FiChevronsDown,
         FiImage,
         FiFileText,
         FiHome } from "react-icons/fi"

const hiddenDocTypes = (listItem) => 
![ 'yourWebsite', 
   'createPage', 
   'blogTemplate',
   'footerTemplate',
   'portfolioTemplate',
   'headerTemplate',
   'menuTemplate',
   'formTemplate'].includes(listItem.getId())

export default () =>
    S.list()
     .defaultLayout('detail')
     .title('Creating a website')
     .items([
       S.listItem()
        .title('Create a web page')
        .schemaType('createPage')
        .icon(FiFilePlus)
        .child(
          S.documentList('createPage')
           .title('All pages')
           .menuItems(S.documentTypeList('createPage').getMenuItems())
           .filter('_type == "createPage"')
       ),
       S.listItem()
        .title('Create the website')
        .schemaType('yourWebsite')
        .icon(FiHome)
        .child(
          S.document()
           .title()
            .schemaType('yourWebsite')
            .documentId('yourWebsite')
            .views([S.view.form()])
        ),
       S.listItem()
        .title('Page Items')
        .icon(FiGrid)
        .child(
           S.list()
            .title('Page templates')
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
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
     ])