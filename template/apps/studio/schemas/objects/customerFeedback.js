export default {
  title: 'Customer Feedback Section',
  name: 'customerFeedback',
  type: 'object',
  fields:[
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'feedback',
      type: 'array',
      title: 'Feedback references',
      of: [
        { type: 'reference',
          description: 'Select the feedback that this page should point to',
          to: [
            {
              type: 'feedback',
            },
          ]
        },
      ],
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `Customer Feedback Section`,
        subtitle: `${heading}`
      };
    }
  },
};
