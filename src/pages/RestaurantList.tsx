import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Restaurant } from '../types';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .order('rating', { ascending: false });

      if (error) throw error;
      setRestaurants(data || []);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!cuisineFilter || restaurant.cuisine_type === cuisineFilter)
  );

  const uniqueCuisines = [...new Set(restaurants.map((r) => r.cuisine_type))];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 rounded-lg border border-gray-200"
            value={cuisineFilter}
            onChange={(e) => setCuisineFilter(e.target.value)}
          >
            <option value="">All Cuisines</option>
            {uniqueCuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading restaurants...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                  <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-green-600 fill-current" />
                    <span className="text-sm text-green-600">{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine_type}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {restaurant.address}
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {'$'.repeat(restaurant.price_range)}
                  </span>
                  <span className="text-gray-600">
                    {restaurant.delivery_time_min} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;