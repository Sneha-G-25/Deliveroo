import {defineField, defineType} from 'sanity'

export const featured = defineType({
  name: 'featured',
  title: 'Featured Meanu categories',
  type: 'document',
  fields: [
    defineField ({
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
    }),
    defineField({
      name: 'short_desc',
      type: 'string',
      title: 'Short_Desc',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of:[{type:"reference", to: [{type: "restaurant"}]}]
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Dish',
    }),
  ],
})
