import React from 'react';
import { Building2, BarChart2, Users, Headphones } from 'lucide-react';

const Business = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">FoodHub for Business</h1>
        <p className="text-xl text-gray-600">
          Corporate meal solutions for modern businesses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Building2 className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Corporate Accounts</h3>
          <p className="text-gray-600">Manage multiple locations and teams</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart2 className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expense Management</h3>
          <p className="text-gray-600">Detailed reporting and analytics</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Team Orders</h3>
          <p className="text-gray-600">Coordinate group meals easily</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Headphones className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
          <p className="text-gray-600">24/7 priority customer service</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your business email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Size
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500">
                <option>1-50 employees</option>
                <option>51-200 employees</option>
                <option>201-500 employees</option>
                <option>500+ employees</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Business;