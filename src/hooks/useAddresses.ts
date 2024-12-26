import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import useAuthStore from '../stores/authStore';
import { Address } from '../types';

export const useAddresses = () => {
  const { user } = useAuthStore();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchAddresses = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('addresses')
          .select('*')
          .eq('user_id', user.id)
          .order('is_default', { ascending: false });

        if (supabaseError) throw supabaseError;
        setAddresses(data || []);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [user]);

  const addAddress = async (address: Omit<Address, 'id' | 'user_id'>) => {
    try {
      const { data, error } = await supabase
        .from('addresses')
        .insert([{ ...address, user_id: user?.id }])
        .select()
        .single();

      if (error) throw error;
      setAddresses([...addresses, data]);
      return data;
    } catch (err: any) {
      throw err;
    }
  };

  const updateAddress = async (id: string, address: Partial<Address>) => {
    try {
      const { data, error } = await supabase
        .from('addresses')
        .update(address)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setAddresses(addresses.map(a => a.id === id ? data : a));
      return data;
    } catch (err: any) {
      throw err;
    }
  };

  const deleteAddress = async (id: string) => {
    try {
      const { error } = await supabase
        .from('addresses')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setAddresses(addresses.filter(a => a.id !== id));
    } catch (err: any) {
      throw err;
    }
  };

  return {
    addresses,
    loading,
    error,
    addAddress,
    updateAddress,
    deleteAddress,
  };
};

export default useAddresses;