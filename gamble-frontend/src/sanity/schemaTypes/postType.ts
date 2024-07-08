import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
 fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
   defineField( {
    name: 'body',
    title: 'Body',
    type: 'array',
    of: [{type: 'block'}],
  }),

  defineField(  {
    name: 'publishedAt',
    title: 'Published At',
    type: 'datetime',
    validation: Rule => Rule.required(),
  }),
  ],
})