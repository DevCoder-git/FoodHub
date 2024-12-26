export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine_type: string;
  address: string;
  rating: number;
  price_range: number;
  image_url: string;
  delivery_time_min: number;
  is_veg: boolean;
  is_open: boolean;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_veg: boolean;
  is_available: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Address {
  id: string;
  user_id: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  postal_code: string;
  is_default: boolean;
}

export interface Order {
  id: string;
  user_id: string;
  restaurant_id: string;
  address_id: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  total_amount: number;
  delivery_fee: number;
  special_instructions?: string;
  created_at: string;
}