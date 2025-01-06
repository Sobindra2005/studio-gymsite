
import { defineField, defineType } from 'sanity';

export const Trainers = defineType({
    name: 'trainers',
    title: 'Trainers',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'speciality',
            type: 'text',
            title: 'Speciality',
        }),
        defineField({
            name: "image",
            type: "image",
        })
    ]

});
