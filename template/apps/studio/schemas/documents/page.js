export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },    
    {
      name: 'backgroundImage',
      type: 'figure',
      title: 'Background Image',
      description: 'The background image you want to use for this page',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'banner' },
        { type: 'card' },
        { type: 'contactCard' },
        { type: 'cta' },
        { type: 'customerFeedback' },
        { type: 'divider' },
        { type: 'figure' },
        { type: 'portableText' },
        { type: 'blogCollection' },
        { type: 'productCollection' },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
    prepare: ({ title, media }) => {
      return {
        title,
        media,
      }
    },
  },
}
