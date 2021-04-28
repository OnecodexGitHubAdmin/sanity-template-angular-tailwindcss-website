// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import blog from './documents/blog'
import feedback from './documents/feedback'
import product from './documents/product'

// Object types
import banner from './objects/banner'
import blogCollection from './objects/blogCollection'
import card from './objects/card'
import code from './objects/code'
import contactCard from './objects/contactCard'
import cta from './objects/cta'
import customerFeedback from './objects/customerFeedback'
import divider from './objects/divider'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import productCollection from './objects/productCollection'
import tag from './objects/tag'
import tagCarousel from './objects/tagCarousel'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    banner,
    blog,
    blogCollection,
    card,
    code,
    contactCard,
    cta,
    customerFeedback,
    divider,
    embedHTML,
    feedback,
    figure,
    internalLink,
    link,
    page,
    portableText,
    product,
    productCollection,
    route,
    siteConfig,
    tag,
    tagCarousel,
  ]),
})
