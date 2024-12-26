import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Restaurant } from '../../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {restaurant.is_veg && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
            Pure Veg
          </span>
        )}
      </div>
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
  );
};

export default RestaurantCard;