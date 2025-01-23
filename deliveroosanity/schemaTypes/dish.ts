import {defineField, defineType} from 'sanity'

export const dish = defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation:(Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      type: 'string',
      title: 'Short_Desc',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of Dish in GBP',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Dish',
    }),
  ],
})
