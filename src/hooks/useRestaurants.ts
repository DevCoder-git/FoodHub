import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Restaurant } from '../types';

export const useRestaurants = (searchQuery = '', cuisineFilter = '') => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        let query = supabase
          .from('restaurants')
          .select('*')
          .order('rating', { ascending: false });

        if (searchQuery) {
          query = query.ilike('name', `%${searchQuery}%`);
        }

        if (cuisineFilter) {
          query = query.eq('cuisine_type', cuisineFilter);
        }

        const { data, error: supabaseError } = await query;

        if (supabaseError) throw supabaseError;
        setRestaurants(data || []);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [searchQuery, cuisineFilter]);

  return { restaurants, loading, error };
};

export default useRestaurants;