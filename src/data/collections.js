export const collections = [
  {
    id: 1,
    slug: "championship-icy-silver",
    name: "Championship Icy Silver",
    description:
      "Our premium silver collection designed for champions. These high-quality items represent excellence and achievement.",
    images: [
      "../images-black/civic-1.jpg",
      "../images-black/civic-2.jpg",
      "../images-black/civic-3.jpg",
      "../images-black/civic-4.jpg",
      "../images-black/civic-5.jpg",
      "../images-black/civic-6.jpg",
      "../images-black/civic-7.jpg",
      "../images-black/civic-8.jpg",
    ],
    features: [
          "Engine: 1.5L Turbocharged",
          "Transmission: CVT Automatic",
          "Color: Silver",
          "Fuel Efficiency: 32 MPG city / 42 MPG highway",
          "Seats: 5",
          "Infotainment: 7-inch touchscreen, Apple CarPlay, Android Auto",
          "Safety: Honda Sensing Suite",
          "Wheels: 17-inch Alloy",
          "Keyless Entry & Push Button Start",
          "Climate Control: Dual-zone automatic",
        ],
    products: [
      {
      id: 101,
        name: "Silver Trophy",
        price: 199.99,
        description: "A premium silver trophy for the champions.",
        images: [
          "images-black/civic-1.jpg",
          "images-black/civic-2.jpg",
          "images-black/civic-3.jpg",
          "images-black/civic-4.jpg",
          "images-black/civic-5.jpg",
          "images-black/civic-6.jpg",
          "images-black/civic-7.jpg",
          "images-black/civic-8.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "championship-icy-blue",
    name: "Championship Icy Blue",
    description:
      "Our distinctive blue collection with icy accents. Perfect for modern champions who want to stand out.",
    features: [
          "Engine: 1.5L Turbocharged",
          "Transmission: CVT Automatic",
          "Color: Blue",
          "Fuel Efficiency: 32 MPG city / 42 MPG highway",
          "Seats: 5",
          "Infotainment: 7-inch touchscreen, Apple CarPlay, Android Auto",
          "Safety: Honda Sensing Suite",
          "Wheels: 17-inch Alloy",
          "Keyless Entry & Push Button Start",
          "Climate Control: Dual-zone automatic",
        ],
    images: [
      "../images-silver/civic-1.jpg",
      "../images-silver/civic-2.jpg",
      "../images-silver/civic-3.jpg",
      "../images-silver/civic-4.jpg",
      "../images-silver/civic-5.jpg",
      "../images-silver/civic-6.jpg",
      "../images-silver/civic-7.jpg",
      "../images-silver/civic-8.jpg",
    ],
    products: [
      {
        id: 201,
        slug: "blue-crystal-trophy",
        name: "Blue Crystal Trophy",
        price: 249.99,
        image: "/placeholder.svg",
        description: "Elegant crystal trophy with blue accents.",
        images: [
          "images-silver/civic-1.jpg",
          "images-silver/civic-2.jpg",
          "images-silver/civic-3.jpg",
          "images-silver/civic-4.jpg",
          "images-silver/civic-5.jpg",
          "images-silver/civic-6.jpg",
          "images-silver/civic-7.jpg",
          "images-silver/civic-8.jpg",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "championship-royal-gold",
    name: "Championship Royal Gold",
    description:
      "Our most prestigious collection featuring royal gold elements. The ultimate symbol of championship excellence.",
    features: [
          "Engine: 1.5L Turbocharged",
          "Transmission: CVT Automatic",
          "Color: Black",
          "Fuel Efficiency: 32 MPG city / 42 MPG highway",
          "Seats: 5",
          "Infotainment: 7-inch touchscreen, Apple CarPlay, Android Auto",
          "Safety: Honda Sensing Suite",
          "Wheels: 17-inch Alloy",
          "Keyless Entry & Push Button Start",
          "Climate Control: Dual-zone automatic",
        ],
    images: [
      "../images-red/civic-1.jpg",
      "../images-red/civic-2.jpg",
      "../images-red/civic-3.jpg",
      "../images-red/civic-4.jpg",
      "../images-red/civic-5.jpg",
      "../images-red/civic-6.jpg",
      "../images-red/civic-7.jpg",
      "../images-red/civic-8.jpg",
    ],
    products: [
      {
        id: 301,
        slug: "gold-championship-cup",
        name: "Gold Championship Cup",
        price: 499.99,
        image: "/placeholder.svg",
        description: "Premium gold cup for ultimate champions.",
        images: [
          "images-red/civic-1.jpg",
          "images-red/civic-2.jpg",
          "images-red/civic-3.jpg",
          "images-red/civic-4.jpg",
          "images-red/civic-5.jpg",
          "images-red/civic-6.jpg",
          "images-red/civic-7.jpg",
          "images-red/civic-8.jpg",
        ],
      },
    ],
  },
];

export const getCollection = () => {
  return collections;
}
export const getCollectionBySlug = (slug)  => {
  return collections.find(collection => collection.slug === slug);
};

export const getAllProducts = () => {
  return collections.flatMap(collection =>
    collection.products.map(product => ({
      ...product,
      collectionId: collection.slug
    }))
  );
};
