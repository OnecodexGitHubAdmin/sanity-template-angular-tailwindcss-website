
export default {
  title: 'ContactCard',
  name: 'contactCard',
  type: 'object',
  fields: [
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
      title: 'Google Maps Url',
      name: 'map',
      type: 'url'
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
