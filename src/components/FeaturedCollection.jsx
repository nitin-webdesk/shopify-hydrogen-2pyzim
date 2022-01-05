import {
  Image, 
  Link,
  flattenConnection,
} from '@shopify/hydrogen';
import ProductCard from '../components/ProductCard';

export default function FeaturedCollection({collection}) {
  
  const featuredProductsCollection = collection;
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return collection ? (
    <div className="shadow-xl rounded-xl items-center bg-white overflow-hidden">
      <div className="px-10 py-10 lg:py-10">
        <div className='border-b-2'>
          <h2 className="text-gray-700 text-3xl font-bold mb-5">
            Featured Collection
          </h2>
        </div>
        <h2 className="text-gray-700 text-3xl font-bold mb-5 pt-5">
          {collection.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap8 mb-8'>
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product}/>
            </div>
          ))}
        </div>
        <Link
          to={`/collections/${collection.handle}`}
          className="inline-block bg-gray-900 text-white text-lg font-medium rounded-md py-4 px-16 uppercase flex justify-center"
        >
          List Collection
        </Link>
      </div>
    </div>
  ) : null;
}
