/*
  # Initial Food Delivery Schema

  1. New Tables
    - `restaurants`
      - Basic restaurant information including name, cuisine, rating, etc.
    - `menu_items`
      - Food items available at restaurants
    - `orders`
      - Customer orders
    - `order_items`
      - Individual items in each order
    - `addresses`
      - Delivery addresses for users

  2. Security
    - Enable RLS on all tables
    - Policies for authenticated users
*/

-- Restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  cuisine_type text NOT NULL,
  address text NOT NULL,
  rating decimal(3,2) DEFAULT 0,
  price_range int CHECK (price_range BETWEEN 1 AND 4),
  image_url text,
  delivery_time_min int DEFAULT 30,
  is_veg boolean DEFAULT false,
  is_open boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Menu Items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id uuid REFERENCES restaurants(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  image_url text,
  category text NOT NULL,
  is_veg boolean DEFAULT false,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User Addresses table
CREATE TABLE IF NOT EXISTS addresses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  address_line1 text NOT NULL,
  address_line2 text,
  city text NOT NULL,
  state text NOT NULL,
  postal_code text NOT NULL,
  is_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  restaurant_id uuid REFERENCES restaurants(id),
  address_id uuid REFERENCES addresses(id),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled')),
  total_amount decimal(10,2) NOT NULL,
  delivery_fee decimal(10,2) DEFAULT 0,
  special_instructions text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Order Items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id uuid REFERENCES menu_items(id),
  quantity int NOT NULL CHECK (quantity > 0),
  price_at_time decimal(10,2) NOT NULL,
  special_instructions text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policies

-- Restaurants: Anyone can view
CREATE POLICY "Restaurants are viewable by everyone" ON restaurants
  FOR SELECT USING (true);

-- Menu Items: Anyone can view
CREATE POLICY "Menu items are viewable by everyone" ON menu_items
  FOR SELECT USING (true);

-- Addresses: Users can manage their own addresses
CREATE POLICY "Users can manage their addresses" ON addresses
  FOR ALL USING (auth.uid() = user_id);

-- Orders: Users can view and create their own orders
CREATE POLICY "Users can manage their orders" ON orders
  FOR ALL USING (auth.uid() = user_id);

-- Order Items: Users can manage items in their orders
CREATE POLICY "Users can manage their order items" ON order_items
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );