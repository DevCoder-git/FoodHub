import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import useAuthStore from '../stores/authStore';
import { Order } from '../types';

export const useOrders = () => {
  const { user } = useAuthStore();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      try {
        const { data, error: supabaseError } = await supabase
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
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (supabaseError) throw supabaseError;
        setOrders(data || []);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return { orders, loading, error };
};

export default useOrders;