export default {
  type: 'object',
  name: 'banner',
  title: 'Banner',
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
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'description',
      type: 'portableText',
      title: 'Description',
    },
    {
      name: 'headingHAlignment',
      type: 'string',
      title: 'Horizontal Alignment of the Heading and CTAs',
      options: {
        list: [
          {title: 'left', value: 'start'},
          {title: 'right', value: 'end'},
          {title: 'center', value: 'center'},
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'headingVAlignment',
      type: 'string',
      title: 'Vertical Alignment of the Heading and CTAs',
      options: {
        list: [
          {title: 'top', value: 'start'},
          {title: 'bottom', value: 'end'},
          {title: 'center', value: 'center'},
        ],
        layout: 'dropdown'
      }
    },    
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions (CTAs)',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle,
        media,
      };
    },
  },
};
