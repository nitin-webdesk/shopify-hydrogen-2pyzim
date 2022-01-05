import {
  useShopQuery,
  ProductProviderFragment,
  flattenConnection,
  Image,
  Link,
} from '@shopify/hydrogen';

import {useParams, useHistory} from 'react-router-dom';

import Layout from '../components/Layout.server';
import FeaturedCollection from '../components/FeaturedCollection';
import FourCollections from '../components/FourCollections';
import gql from 'graphql-tag';

// Fetch product data from your storefront by passing in a GraphQL query to the
// `useShopQuery` server component.
export default function Index() {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
    },
  });
  const collections = data ? flattenConnection(data.collections) : [];
  const featuredCollection = collections[2];

  const articles = data ? flattenConnection(data.articles) : [];
  const article = articles[0]
  const pages = data ? flattenConnection(data.pages) : [];
  const page = pages[0];
  console.log(article);
  console.log(page);
  
  // Return the first three products and the load more button.
  return (
    <Layout>
      <FeaturedCollection collection = {featuredCollection}/>
      <Link
        to={`/pages/${page.handle}`}
        className="text-blue-600 hover:underline"
      >
        Page
      </Link>
      <br/>
      {/* <button
        onClick={toarticle}
        className="text-blue-600 hover:underline"
      >
        Blog Article
      </button> */}
      <Link
        to={{
          pathname: `/articles/${article.handle}?blog_handle=${article.blog.handle}`,
          state: {
            blogs_handle: `${article.blog.handle}`
          }
        }}
        className="text-blue-600 hover:underline"
      >
        Blog Article
      </Link>

      <FourCollections collections = {collections}/>


    </Layout>
  );
}

// Define the GraphQL query.
const QUERY = gql`
  query HomeQuery(
    $numCollections: Int = 20
    $numProducts: Int = 4
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 1
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0 
  ) {
    collections(first: $numCollections){
      edges{
        node{
          descriptionHtml
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
          products(first: $numProducts) {
            edges {
              node {
                ...ProductProviderFragment
              }
            }
          }
        }
      }
    },
    articles(first: 2){
      edges{
        node{
          handle
          title
          id
          blog{
            handle
          }
        }
      }
    },
    pages(first:2){
      edges{
        node{
          handle
          title
        }
      }
    },
  }
  ${ProductProviderFragment}
  ${Image.Fragment}
  `
