import {
    Image, 
    Link
} from '@shopify/hydrogen';

import CollectionCard from "./CollectionCard";

export default function FourCollections({collections}){

    const fourcollections = collections.slice(0,4);

    return(
        <div className="shadow-xl rounded-xl items-center bg-white overflow-hidden">
            <div className="px-10 py-10 lg:py-10">
            <div className='border-b-2'>
                <h2 className="text-gray-700 text-3xl font-bold mb-5">
                    Collections
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap8 mb-8 pt-5'>
                {fourcollections.map((collection) =>(
                    <CollectionCard collection={collection}/>
                ))}
            </div>
            <Link
            to={`/collections`}
            className="inline-block bg-gray-900 text-white text-lg font-medium rounded-md py-4 px-16 uppercase flex justify-center"
            >
               View All Collections
            </Link>
      </div>
    </div>
    );
}

