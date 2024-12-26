import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Address } from '../../types';

interface AddressFormProps {
  onSubmit: (address: Omit<Address, 'id' | 'user_id'>) => void;
  isLoading?: boolean;
}

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    postal_code: '',
    is_default: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Address Line 1"
        icon={<MapPin className="h-5 w-5" />}
        required
        value={formData.address_line1}
        onChange={(e) => setFormData({ ...formData, address_line1: e.target.value })}
      />
      <Input
        label="Address Line 2 (Optional)"
        value={formData.address_line2}
        onChange={(e) => setFormData({ ...formData, address_line2: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="City"
          required
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        <Input
          label="State"
          required
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
      </div>
      <Input
        label="Postal Code"
        required
        value={formData.postal_code}
        onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={formData.is_default}
          onChange={(e) => setFormData({ ...formData, is_default: e.target.checked })}
          className="rounded text-orange-500 focus:ring-orange-500"
        />
        <span className="text-gray-700">Set as default address</span>
      </label>
      <Button type="submit" isLoading={isLoading} className="w-full">
        Save Address
      </Button>
    </form>
  );
};

export default AddressForm;