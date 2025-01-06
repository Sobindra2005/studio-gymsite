
import { defineField, defineType } from 'sanity';

export const Gallery = defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        defineField({
            name: "image",
            type: "image",
        })
    ]

});


