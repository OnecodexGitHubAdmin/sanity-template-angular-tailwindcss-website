import { MdMessage } from "react-icons/md";

export default {
  name: 'feedback',
  type: 'document',
  title: 'Feedback',
  icon: MdMessage,
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
    },{
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'customer',
      type: 'string',
      title: 'Customer',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
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
      text: 'text',
      media: 'image',
    },
    prepare: ({title, text, media}) => {
      return {
        title: title || text,
        media
      };
    }
  },
};
