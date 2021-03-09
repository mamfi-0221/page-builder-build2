/*
 *  This schema object is used to add an image as content to your page. 
 *  This object can be manipulated via the `Page templates` document on your studio. 
 */
import { FiImage } from "react-icons/fi"

export default {
    name: 'addImageOnly',
    title: 'Add Image Only',
    icon: FiImage, 
    type: 'document',
    fields: [
        {
            name: 'imageContent',
            title: 'Image Content',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility if there are problems showing the image.',
            validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
            options: {
                isHighlighted: true
            }
        }
    ],
    preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  } 
}