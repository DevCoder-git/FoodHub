import React from 'react';
import { Star } from 'lucide-react';

interface Dish {
  id: string;
  name: string;
  restaurant: string;
  price: number;
  rating: number;
  image: string;
  cuisine: string;
}

const featuredDishes: Dish[] = [
  {
    id: '1',
    name: 'Dragon Roll',
    restaurant: 'Sakura Japanese Kitchen',
    price: 16.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    cuisine: 'Japanese'
  },
  {
    id: '2',
    name: 'Butter Chicken',
    restaurant: 'Taj Mahal Palace',
    price: 19.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db',
    cuisine: 'Indian'
  },
  {
    id: '3',
    name: 'Margherita Pizza',
    restaurant: 'Bella Italia',
    price: 17.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    cuisine: 'Italian'
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredDishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <p className="text-gray-600 text-sm">{dish.restaurant}</p>
                </div>
                <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                  <Star className="h-4 w-4 text-green-600 fill-current" />
                  <span className="ml-1 text-sm text-green-600">{dish.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-orange-500 font-semibold">${dish.price}</span>
                <span className="text-sm text-gray-500">{dish.cuisine}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDishes;