export default {
  name: 'blogCollection',
  type: 'object',
  title: 'Blog Collection',
  fields: [
    {
      name: 'blogReferences',
      type: 'array',
      title: 'Blog References',
      of: [
        {
          name: 'blog',
          type: 'reference',
          description: 'Select the blog that this page should point to',
          to: [
            {
              type: 'blog',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare: () => {
      return {
        title: 'Blog Collection',
      }
    },
  },
}
