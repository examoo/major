
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getCollectionBySlug } from '../data/collections';
 import  Button from '@/components/ui/button';
import {  ShoppingCart } from 'lucide-react';
import TurnableImage from '../components/ui/turnable-image';
import FeatureList from '../components/ui/feature-list';

const CollectionDetail = () => {
  const { slug } = useParams();
  const collection = getCollectionBySlug(slug || '');

  if (!collection) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Collection not found</h2>
          <Link to="/" className="mt-4 inline-block px-4 py-2 bg-black text-white rounded">
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto m-6">
        <div className="relative">
          <div className="bg-dark rounded-lg shadow-sm flex items-center justify-center relative">
            <TurnableImage images={collection?.images} />
          </div>
        </div>

        <div className="mb-10 mt-5">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            {collection?.name}
          </h1>
          <h6>{collection?.subtitle}</h6>
          <div className="mt-1">
            <p className="text-gray-800 whitespace-pre-line">
              {collection.description}
            </p>
            <p className="mt-4 text-gray-800">
              A collection that raises awareness that degree wins championship.
            </p>
            <FeatureList features={collection?.features ?? []} />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button variant="outline">Lookbook</Button>
          <Button variant="default">
            <ShoppingCart className="mr-2" size={16} />
            Shop
          </Button>
          <Button variant="outline">Major SZN</Button>
        </div>
      </div>
    </Layout>
    );
};

export default CollectionDetail;
