import React from 'react';
import { Filter } from 'lucide-react';

interface RestaurantFiltersProps {
  cuisineFilter: string;
  setCuisineFilter: (cuisine: string) => void;
  priceFilter: number | null;
  setPriceFilter: (price: number | null) => void;
  vegFilter: boolean;
  setVegFilter: (veg: boolean) => void;
}

const RestaurantFilters: React.FC<RestaurantFiltersProps> = ({
  cuisineFilter,
  setCuisineFilter,
  priceFilter,
  setPriceFilter,
  vegFilter,
  setVegFilter,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-gray-500" />
        <h3 className="font-semibold">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cuisine Type
          </label>
          <select
            value={cuisineFilter}
            onChange={(e) => setCuisineFilter(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          >
            <option value="">All Cuisines</option>
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((price) => (
              <button
                key={price}
                onClick={() => setPriceFilter(price === priceFilter ? null : price)}
                className={`px-3 py-1 rounded-full ${
                  price === priceFilter
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {'$'.repeat(price)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={vegFilter}
              onChange={(e) => setVegFilter(e.target.checked)}
              className="rounded text-orange-500 focus:ring-orange-500"
            />
            <span className="text-sm text-gray-700">Vegetarian Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFilters;