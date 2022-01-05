import {useParams, useHistory} from 'react-router-dom';
import {
    useShopQuery,
    RawHtml,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';

export default function Article(props) {
    const {handle, query} = useParams();
    const pro = new URLSearchParams(props.search);
    const blog_handle = pro.get("blog_handle")
    const {data} = useShopQuery(
        {
            query: QUERY, 
            variables: {
              handle,
              blog_handle
            }
        }
    );

    if (!data.blogByHandle) {
      return <NotFound />;
    }
    
    console.log(props);
    console.log(pro.get("blog_handle"));
    console.log(handle);
    console.log(data);

    const article = data.blogByHandle.articleByHandle;

    return (
      <Layout>
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <RawHtml string={article.contentHtml} className="prose mt-8" />
      </Layout>
    );
  }
  
  const QUERY = gql`
    query blogDetails(
      $blog_handle: String!
      $handle: String!) 
      {
      blogByHandle(handle: $blog_handle) {
        articleByHandle(handle: $handle){
          title
          content
          contentHtml
          publishedAt
        }
      }
    }
  `;
  