import {
    Image,
    useShopQuery,
    flattenConnection
} from '@shopify/hydrogen';

import Layout from '../components/Layout.server';
import CollectionList from '../components/CollectionList';
import gql from 'graphql-tag';

export default function collections(){

    const {data} = useShopQuery({
        query: QUERY,
        variables: {
        }
    });

    const collections = flattenConnection(data.collections);
    
    return(
        <Layout>
            <h1>All Collections</h1>
            <CollectionList collections= {collections}/>
        </Layout>
        
    );
}

const QUERY = gql`
{
  collections(first: 20) {
    edges {
      node {
        description
        handle
        id
        title
        image {
          ...ImageFragment
        }
      }
    }
  }
}
${Image.Fragment}
`;