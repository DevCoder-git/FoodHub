import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">About FoodHub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2024, FoodHub has revolutionized food delivery by connecting people with their favorite restaurants. Our mission is to provide convenient access to delicious food while supporting local businesses.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We're committed to making food delivery accessible, efficient, and enjoyable for everyone. By partnering with top restaurants and employing cutting-edge technology, we ensure a seamless experience from order to delivery.
          </p>
        </div>
        
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80"
            alt="Food delivery"
            className="rounded-lg shadow-md w-full"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-600 mb-2">1M+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-600 mb-2">500+</h3>
              <p className="text-gray-600">Restaurant Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;