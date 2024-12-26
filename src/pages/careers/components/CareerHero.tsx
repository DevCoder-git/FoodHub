import React from 'react';
import { Users, Heart, Coffee } from 'lucide-react';

const CareerHero = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Be part of a team that's revolutionizing the food delivery industry
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Great Team</h3>
          <p className="text-gray-600">Work with talented individuals</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Amazing Benefits</h3>
          <p className="text-gray-600">Comprehensive healthcare and more</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Coffee className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
          <p className="text-gray-600">Flexible hours and remote options</p>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;