import {defineField, defineType} from 'sanity'

export const gameType = defineType({
  name: 'game',
  title: 'Game',
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