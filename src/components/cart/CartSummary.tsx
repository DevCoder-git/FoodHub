import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../stores/cartStore';
import Button from '../ui/Button';

const CartSummary: React.FC = () => {
  const { items, total } = useCartStore();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-600 text-center">Your cart is empty</p>
        <Button
          variant="primary"
          className="w-full mt-4"
          onClick={() => navigate('/restaurants')}
        >
          Browse Restaurants
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
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
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 mt-2">
          <span>Delivery Fee</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between items-center font-semibold text-lg mt-4">
          <span>Total</span>
          <span>${(total + 5).toFixed(2)}</span>
        </div>
        <Button
          variant="primary"
          className="w-full mt-6"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;