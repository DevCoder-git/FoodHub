import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import useCartStore from '../stores/cartStore';
import useAuthStore from '../stores/authStore';
import { supabase } from '../lib/supabase';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCartStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    setLoading(true);
    try {
      const order = {
        user_id: user.id,
        restaurant_id: items[0]?.restaurant_id, // Assuming all items are from the same restaurant
        total_amount: total,
        status: 'pending',
      };

      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert([order])
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = items.map((item) => ({
        order_id: orderData.id,
        menu_item_id: item.id,
        quantity: item.quantity,
        price_at_time: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      clearCart();
      navigate('/orders');
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some delicious items to your cart!</p>
        <button
          onClick={() => navigate('/restaurants')}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Browse Restaurants
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center py-4 border-b last:border-b-0"
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$5.00</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(total + 5).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;