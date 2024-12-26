import React from 'react';

const categories = [
  {
    name: 'Japanese',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
  },
  {
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db'
  },
  {
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
  },
  {
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e'
  }
];

const CuisineCategories = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Popular Cuisines</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuisineCategories;