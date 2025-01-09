import { defineField, defineType } from 'sanity'

export const HeroSection = defineType({
    name: 'HeroSection',
    title: 'HeroSection',
    type: 'document',
    fields: [
        defineField({
            name: 'Quote',
            type: 'string',
        }),
        defineField({
            name: 'desc',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'array',
            of: [{ name: "image", type: 'image' }]
        }),
    ],
})

