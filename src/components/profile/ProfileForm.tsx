import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';
import useAuthStore from '../../stores/authStore';

const ProfileForm = () => {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: user?.email || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          ...formData,
          updated_at: new Date(),
        });

      if (error) throw error;
      // Show success message
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        icon={<User className="h-5 w-5" />}
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
        required
      />
      <Input
        label="Email"
        icon={<Mail className="h-5 w-5" />}
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        disabled
      />
      <Input
        label="Phone"
        icon={<Phone className="h-5 w-5" />}
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <Button type="submit" isLoading={loading} className="w-full">
        Update Profile
      </Button>
    </form>
  );
};

export default ProfileForm;