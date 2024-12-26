import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ShoppingBag } from 'lucide-react';
import FeaturedDishes from '../components/home/FeaturedDishes';
import Stats from '../components/home/Stats';
import CuisineCategories from '../components/home/CuisineCategories';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Food delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Delicious food delivered to your doorstep
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Order from your favorite restaurants with just a few clicks
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your delivery location"
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800"
                  />
                </div>
                <Link
                  to="/restaurants"
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors text-center"
                >
                  Find Food
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <CuisineCategories />
        <FeaturedDishes />
      </div>

      <Stats />

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Set Your Location</h3>
            <p className="text-gray-600">Choose your delivery address</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Restaurant</h3>
            <p className="text-gray-600">Browse menus and reviews</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get It Delivered</h3>
            <p className="text-gray-600">Food is prepared & delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;