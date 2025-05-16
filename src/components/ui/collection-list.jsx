import { Link } from "react-router-dom";
import { getCollection } from "../../data/collections";
import { useState } from "react";

const CollectionList = () => {
    const collections = getCollection();
      const [isCollectionHovered, setIsCollectionHovered] = useState(false);

    return (
        <div className="relative inline-block">
            <a
                href="#"
                onMouseEnter={() => setIsCollectionHovered(true)}
                onMouseLeave={() => setIsCollectionHovered(false)}
                className="py-5 px-3 text-gray-200 hover:text-[#e63946] font-bold"
            >
                Collections
            </a>
            {isCollectionHovered && (
                <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
                    onMouseEnter={() => setIsCollectionHovered(true)}
                    onMouseLeave={() => setIsCollectionHovered(false)}
                >
                    {Object.values(collections).map((collection) => (
                        <Link
                            key={collection.id}
                            to={`/collection/${collection.slug}`}
                            className="block px-4 py-2 bg-[#242424] hover:text-[#e63946]"
                        >
                            {collection?.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CollectionList;