export default {
  name: 'tagCarousel',
  type: 'object',
  title: 'Tag Carousel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      title: 'title'
    },
    prepare: ({title}) => {
      return {
        title
      };
    }
  },
};
