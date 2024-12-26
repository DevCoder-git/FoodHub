import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import useAuthStore from '../stores/authStore';
import useCartStore from '../stores/cartStore';
import AddressForm from '../components/checkout/AddressForm';
import PaymentForm from '../components/checkout/PaymentForm';
import CartSummary from '../components/cart/CartSummary';
import { Address } from '../types';

const Checkout = () => {
  const { user } = useAuthStore();
  const { items, total, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [step, setStep] = useState<'address' | 'payment'>('address');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<Omit<Address, 'id' | 'user_id'> | null>(null);

  if (!user) {
    navigate('/auth');
    return null;
  }

  if (items.length === 0) {
    navigate('/restaurants');
    return null;
  }

  const handleAddressSubmit = async (addressData: Omit<Address, 'id' | 'user_id'>) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('addresses')
        .insert([{ ...addressData, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      setAddress(addressData);
      setStep('payment');
    } catch (error) {
      console.error('Error saving address:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSubmit = async (paymentDetails: any) => {
    setLoading(true);
    try {
      // In a real app, you would process payment here
      const order = {
        user_id: user.id,
        restaurant_id: items[0].restaurant_id,
        total_amount: total + 5, // Including delivery fee
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
      console.error('Error processing order:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            {step === 'address' ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
                <AddressForm onSubmit={handleAddressSubmit} isLoading={loading} />
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                <PaymentForm onSubmit={handlePaymentSubmit} isLoading={loading} />
              </>
            )}
          </div>
        </div>
        
        <div className="md:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;