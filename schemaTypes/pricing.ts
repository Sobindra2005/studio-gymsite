import { defineField, defineType } from 'sanity';

export const Pricing = defineType({
    name: 'pricing',
    title: 'Pricing',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price',
        }),
        defineField({
            name: 'features',
            type: 'array',
            title: 'Features',
            of:[{type: 'string'} ]
        }),
        defineField({
            name: 'isPopular',
            type: 'boolean',
            title: 'Is Popular',
        })
    ]

});