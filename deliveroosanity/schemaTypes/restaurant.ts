import {defineField, defineType} from 'sanity'

export const restaurant = defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitute of Restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of Restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from 1-5 (Starts) ',
      validation: (Rule) => Rule.min(1).max(5).error('Please enter value from 1 to 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: "dish"}]}],
    }),
  ],
})
