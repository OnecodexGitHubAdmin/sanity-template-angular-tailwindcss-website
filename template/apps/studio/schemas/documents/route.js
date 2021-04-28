import { MdLink } from 'react-icons/md'

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: MdLink,
  validation: (Rule) =>
    Rule.custom(
      (fields = {}) =>
        (fields.page && !fields.blog && !fields.product) ||
        (fields.blog && !fields.page && !fields.product) ||
        (fields.product && !fields.blog && !fields.page) ||
        'Only one type (page, blog or product) is allowed'
    ),
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'blog',
      type: 'reference',
      description: 'Select the blog entry that this route should point to',
      to: [
        {
          type: 'blog',
        },
      ],
    },
    {
      name: 'product',
      type: 'reference',
      description: 'Select the product entry that this route should point to',
      to: [
        {
          type: 'product',
        },
      ],
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      title: 'title',
      pageTitle: 'page.title',
      blogTitle: 'blog.title',
      productTitle: 'product.title',
    },
    prepare({ slug, title, pageTitle, blogTitle, productTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Title: ${title}, Page: ${pageTitle}, Blog: ${blogTitle}, Product: ${productTitle}`,
      }
    },
  },
}
