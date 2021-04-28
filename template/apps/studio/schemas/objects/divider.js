export default {
  title: 'Divider',
  name: 'divider',
  type: 'object',
  fields:[
    {
      name: 'show',
      type: 'boolean',
      title: 'Show',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Divider`,
      };
    },
  },
};
