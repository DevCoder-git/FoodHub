import React from 'react';
import { Smartphone, Download, Star, Shield } from 'lucide-react';

const Apps = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Download Our Apps</h1>
        <p className="text-xl text-gray-600">
          Get the best food delivery experience on your mobile device
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">FoodHub Mobile App</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Smartphone className="h-6 w-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-600">Intuitive interface for quick ordering</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Track your order from restaurant to doorstep</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="h-6 w-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600">Multiple secure payment options</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-8">
            <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              <Download className="h-5 w-5" />
              <span>App Store</span>
            </button>
            <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              <Download className="h-5 w-5" />
              <span>Play Store</span>
            </button>
          </div>
        </div>
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
            alt="Mobile App"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Apps;