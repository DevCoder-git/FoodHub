import React, { useEffect, useState } from 'react';
import { Clock, Package, Truck, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import useAuthStore from '../stores/authStore';
import { Order } from '../types';
import OrderTracker from '../components/order/OrderTracker';

const OrderStatus = {
  pending: { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  confirmed: { icon: Package, color: 'text-blue-500', bg: 'bg-blue-50' },
  preparing: { icon: Package, color: 'text-blue-500', bg: 'bg-blue-50' },
  out_for_delivery: { icon: Truck, color: 'text-orange-500', bg: 'bg-orange-50' },
  delivered: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50' },
  cancelled: { icon: Clock, color: 'text-red-500', bg: 'bg-red-50' },
};

const Orders = () => {
  const { user } = useAuthStore();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          restaurants (
            name,
            image_url
          ),
          order_items (
            *,
            menu_items (
              name,
              price
            )
          )
        `)
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">No orders yet</h2>
        <p className="text-gray-600">Start ordering your favorite food!</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => {
          const StatusIcon = OrderStatus[order.status].icon;
          return (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={order.restaurants.image_url}
                      alt={order.restaurants.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {order.restaurants.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Order #{order.id.slice(0, 8)}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
                      OrderStatus[order.status].bg
                    }`}
                  >
                    <StatusIcon
                      className={`h-5 w-5 ${OrderStatus[order.status].color}`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        OrderStatus[order.status].color
                      }`}
                    >
                      {order.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <OrderTracker status={order.status} />

                <div className="border-t pt-4">
                  <div className="space-y-2">
                    {order.order_items.map((item: any) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">
                          {item.quantity}x {item.menu_items.name}
                        </span>
                        <span className="font-medium">
                          ${(item.quantity * item.menu_items.price).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total Amount</span>
                      <span>${order.total_amount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;