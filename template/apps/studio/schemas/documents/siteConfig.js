import bcp47 from 'bcp47'

export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  fieldsets: [
    { name: 'footer', title: 'Footer' },
    { name: 'copyright', title: 'Copyright' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      title: 'Brand logo',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: (Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      title: 'Enable Shopping Card Icon',
      name: 'addShoppingCardIcon',
      type: 'boolean'
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      validation: (Rule) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      title: 'Social Media Links',
      name: 'socialMediaLinks',
      type: 'array',
      fieldset: 'footer',
      of: [
        {
          type: 'tag',
        },
      ],
    },
    {
      name: 'footerText',
      type: 'portableText',
      fieldset: 'footer',
    },
    {
      name: 'copyrightDate',
      Title: 'Copyright Date From',
      type: 'date',
      fieldset: 'copyright',
    },
    {
      name: 'copyrightText',
      Title: 'Text',
      type: 'string',
      fieldset: 'copyright',
    },
    {
      name: 'primaryColor',
      Title: 'Primary Color',
      type: 'colorPicker',
    },
    {
      name: 'accentColor',
      Title: 'Accent Color',
      type: 'colorPicker',
    },
  ],
}
