
import  { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getAllProducts,getCollection } from '../data/collections';
import { Card, CardContent } from '@/components/ui/card';
import  Button  from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Slider } from '../components/ui/slider';
import TurnableImage from '../components/ui/turnable-image';
import {toast } from 'react-toastify';
import CheckBox from '../components/ui/check-box';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Shop = () => {
  const allProducts = getAllProducts();
  const allCollection = getCollection();
  const [products, setProducts] = useState(allProducts);
  const [priceRange, setPriceRange] = useState([0,600]);
  const [activeCollections, setActiveCollections] = useState([]);
  
  const handleFilterChange = (collectionId) => {
    const newActiveCollections = {
      ...activeCollections,
      [collectionId]: !activeCollections[collectionId]
    };
    setActiveCollections(newActiveCollections);
    filterProducts(newActiveCollections, priceRange);
  };
  
  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
    console.log(values);
    filterProducts(activeCollections, values);
  };
  
  const filterProducts = (collections, prices) => {
    const filtered = allProducts.filter(product => {
      const inActiveCollection = collections[product.collectionId];
      const inPriceRange =
        product.price >= prices[0] && product.price <= prices[1];
      return inActiveCollection && inPriceRange;
    });
    setProducts(filtered);
  };
  
  const addToCart = (product) => {
      toast.success(product?.name+" "+"Added to Cart") 
     };
useEffect(() => {
  if (allCollection && Object.values(allCollection).length > 0) {
    const initialCollections = {};
    Object.values(allCollection).forEach(col => {
      initialCollections[col.slug] = true;
    });
    setActiveCollections(initialCollections);
  }
}, [allCollection]);
  return (
    <Layout>
      <div className="space-y-8 m-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Major Shop</h1>
          <p className="text-xl text-gray-600 mt-3">
            Browse all our products in one place
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {products.length > 0 ? (
                products.map((product) => (
                  <Card
                    key={product.id}
                    className="h-full hover:shadow-lg transition-shadow text-gray-900"
                  >
                    <CardContent className="p-6">
                      <div className="aspect-square bg-white rounded-md mb-4 flex items-center justify-center">
                        <TurnableImage images={product?.images} />
                      </div>
                      <h3 className="text-lg font-bold">{product?.name}</h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        {product?.description}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-bold">
                          ${product?.price.toFixed(2)}
                        </span>
                        <Button
                          onClick={() => addToCart(product)}
                          className="flex items-center gap-2"
                          variant="default"
                          size="sm"
                        >
                          <ShoppingCart size={16} />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500">
                    No products found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/4 space-y-4">
            <Card>
              <CardContent className="p-4 text-gray-900">
                <h3 className="text-lg font-bold mb-3 text-gray">
                  Price Range
                </h3>
                <div className="space-y-6">
                          <RangeSlider
                          defaultValue={priceRange}
                          min={0}
                          max={600}
                          value={priceRange}
                          onInput={(val)=>handlePriceRangeChange(val)}
                          />

                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-gray-900">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Filter By Collection
                </h3>
                <div className="space-y-2">
                  {Object.values(allCollection).map((collection) => (
                    <CheckBox
                      label={collection?.name}
                      checked={activeCollections[collection?.slug] ?? false}
                      onChange={() => handleFilterChange(collection?.slug)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
