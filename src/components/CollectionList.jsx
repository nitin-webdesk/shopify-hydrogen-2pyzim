import CollectionCard from "./CollectionCard";

export default function CollectionList({collections}){

    return(
        <div className = "grid md: grid-cols-3 gap-4">
            {collections.map((collection) =>(
                <CollectionCard collection={collection}/>
            ))}
        </div>
    );
}