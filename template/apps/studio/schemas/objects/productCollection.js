export default {
  name: 'productCollection',
  type: 'object',
  title: 'Product Collection',
  fields: [
    {
      name: 'productReferences',
      type: 'array',
      title: 'Product References',
      of: [
        {
          name: 'product',
          type: 'reference',
          description: 'Select the product that this page should point to',
          to: [
            {
              type: 'product',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare: () => {
      return {
        title: 'Product Collection',
      }
    },
  },
}
