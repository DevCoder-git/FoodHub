import React from 'react';
import { ChefHat, TrendingUp, Users, Clock } from 'lucide-react';

const Partner = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Partner with FoodHub</h1>
        <p className="text-xl text-gray-600">
          Grow your business by reaching more customers through our platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ChefHat className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Restaurant Partners</h3>
          <p className="text-gray-600">Join our network of successful restaurants</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Grow Your Sales</h3>
          <p className="text-gray-600">Increase your revenue with online orders</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Reach More Customers</h3>
          <p className="text-gray-600">Connect with a larger customer base</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
          <p className="text-gray-600">Manage your own schedule</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your restaurant name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your phone number"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Partner;