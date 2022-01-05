import {
    Image, 
    Link
} from '@shopify/hydrogen';

// import placeholderImage from '../assets/placeholder-image.png';

export default function CollectionCard({collection}){

    return collection ? (
        <div className="mb-6">
            <Link to={`/collections/${collection.handle}`}>
                {collection.image ? (
                <Image width="465" height="465" image={collection.image} />
                ) : (<img src="/assets/placeholder-image.png" alt="placeholder" width={465} height={465}/>)}
                <strong>{collection.title}</strong>
            </Link>
        </div>
    ): null;

}