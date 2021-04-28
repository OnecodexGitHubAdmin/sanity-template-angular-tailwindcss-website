
export default {
  title: 'Card',
  name: 'card',
  type: 'object',
  fields: [    
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'portableText'
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          name: 'cta',
          type: 'cta',
          description: 'Set call to action'
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        { type: 'tag' }
      ],
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};
