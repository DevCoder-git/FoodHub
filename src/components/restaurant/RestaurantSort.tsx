import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface RestaurantSortProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const RestaurantSort: React.FC<RestaurantSortProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
      <ArrowUpDown className="h-5 w-5 text-gray-500" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border-none bg-transparent focus:ring-0 text-sm"
      >
        <option value="rating">Rating: High to Low</option>
        <option value="deliveryTime">Delivery Time</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default RestaurantSort;