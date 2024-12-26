import React from 'react';
import { Users, ShoppingBag, ChefHat } from 'lucide-react';

const Stats = () => {
  return (
    <section className="bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <Users className="h-12 w-12 text-orange-500 mr-4" />
            <div>
              <h3 className="text-3xl font-bold">100K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-orange-500 mr-4" />
            <div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-gray-600">Monthly Orders</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <ChefHat className="h-12 w-12 text-orange-500 mr-4" />
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-600">Restaurant Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;