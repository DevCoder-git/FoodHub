import React, { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface PaymentFormProps {
  onSubmit: (paymentDetails: any) => void;
  isLoading?: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Card Number"
        icon={<CreditCard className="h-5 w-5" />}
        required
        placeholder="1234 5678 9012 3456"
        value={formData.cardNumber}
        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Expiry Date"
          icon={<Calendar className="h-5 w-5" />}
          required
          placeholder="MM/YY"
          value={formData.expiryDate}
          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
        />
        <Input
          label="CVV"
          icon={<Lock className="h-5 w-5" />}
          required
          type="password"
          maxLength={4}
          value={formData.cvv}
          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
        />
      </div>
      <Input
        label="Cardholder Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <Button type="submit" isLoading={isLoading} className="w-full">
        Pay Now
      </Button>
    </form>
  );
};

export default PaymentForm;