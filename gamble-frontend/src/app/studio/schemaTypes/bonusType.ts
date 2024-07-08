import {defineField, defineType} from 'sanity'

export const bonusType = defineType({
  name: 'bonus',
  title: 'Bonus',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
   defineField( {
    name: 'image',
    title: 'Image',
    type: 'image',
    description: 'Image For The Game',
    options: {
        hotspot: true // <-- Defaults to false
      }
  }),
  defineField( {
    name: 'description',
    title: 'Description',
    type: 'array',
    of: [{type: 'block'}],
  }),

  defineField({
    name: 'link',
    title: 'Link',
    type: 'string',
    validation: Rule => Rule.required(),
  }),

  defineField(  {
    name: 'publishedAt',
    title: 'Published At',
    type: 'datetime',
    validation: Rule => Rule.required(),
  }),
  ],
})