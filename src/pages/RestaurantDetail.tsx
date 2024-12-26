import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Star, Plus, Minus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Restaurant, MenuItem } from '../types';
import useCartStore from '../stores/cartStore';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { items, addItem, removeItem, updateQuantity } = useCartStore();

  useEffect(() => {
    if (id) {
      fetchRestaurantDetails();
      fetchMenuItems();
    }
  }, [id]);

  const fetchRestaurantDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setRestaurant(data);
    } catch (error) {
      console.error('Error fetching restaurant:', error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('restaurant_id', id)
        .order('category');

      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const getItemQuantity = (itemId: string) => {
    const item = items.find((i) => i.id === itemId);
    return item?.quantity || 0;
  };

  const categories = [...new Set(menuItems.map((item) => item.category))];

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!restaurant) return <div className="text-center py-8">Restaurant not found</div>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">{restaurant.rating}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{restaurant.description}</p>
          <div className="flex items-center space-x-4 text-gray-600">
            <span>{restaurant.cuisine_type}</span>
            <span>•</span>
            <span>{'$'.repeat(restaurant.price_range)}</span>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>{restaurant.delivery_time_min} min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="space-y-4">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md p-4 flex items-center"
                    >
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">${item.price}</span>
                            <div className="flex items-center space-x-2">
                              {getItemQuantity(item.id) > 0 ? (
                                <>
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="p-1 rounded-full bg-orange-100 text-orange-500"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span>{getItemQuantity(item.id)}</span>
                                </>
                              ) : null}
                              <button
                                onClick={() => addItem(item)}
                                className="p-1 rounded-full bg-orange-100 text-orange-500"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        {item.is_veg && (
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs rounded mt-2">
                            Vegetarian
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            {items.length > 0 ? (
              <>
                <div className="space-y-4 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total</span>
                    <span>${useCartStore.getState().total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {/* Handle checkout */}}
                    className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-600 text-center">Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;