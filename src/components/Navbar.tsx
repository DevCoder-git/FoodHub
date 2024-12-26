import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Clock } from 'lucide-react';
import useAuthStore from '../stores/authStore';

const Navbar = () => {
  const { user, signOut } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">FoodHub</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/restaurants" className="text-gray-600 hover:text-orange-500">
              Restaurants
            </Link>
            {user ? (
              <>
                <Link to="/orders" className="flex items-center space-x-1 text-gray-600 hover:text-orange-500">
                  <Clock className="h-5 w-5" />
                  <span>Orders</span>
                </Link>
                <Link to="/cart" className="flex items-center space-x-1 text-gray-600 hover:text-orange-500">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Cart</span>
                </Link>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
                >
                  <User className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;