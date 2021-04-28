export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
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
      name: 'introduction',
      type: 'string',
      title: 'Introduction',
    },
    {
      name: 'content',
      type: 'portableText',
      title: 'Content'
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        { type: 'tag' }
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Short Description',
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
    prepare: ({title, media}) => {
      return {
        title,
        media
      };
    }
  },
};
