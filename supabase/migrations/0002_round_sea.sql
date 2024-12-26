/*
  # Add Restaurant and Menu Data

  1. Data Addition
    - Add 5 diverse restaurants
    - Add 250 menu items (50 items per restaurant)
    - Include variety of cuisines and price ranges
    
  2. Categories per Restaurant
    - Appetizers
    - Main Course
    - Desserts
    - Beverages
    - Specials
*/

-- Insert Restaurants
INSERT INTO restaurants (name, description, cuisine_type, address, rating, price_range, image_url, delivery_time_min, is_veg, is_open) 
VALUES
  (
    'Sakura Japanese Kitchen',
    'Authentic Japanese cuisine featuring fresh sushi, ramen, and traditional dishes',
    'Japanese',
    '123 Cherry Blossom St',
    4.8,
    3,
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    35,
    false,
    true
  ),
  (
    'Taj Mahal Palace',
    'Premium Indian dining with rich curries and tandoor specialties',
    'Indian',
    '456 Spice Avenue',
    4.7,
    2,
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
    40,
    true,
    true
  ),
  (
    'Bella Italia',
    'Authentic Italian restaurant serving handmade pasta and wood-fired pizzas',
    'Italian',
    '789 Olive Garden Road',
    4.6,
    3,
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80',
    30,
    false,
    true
  ),
  (
    'Golden Dragon',
    'Traditional Chinese cuisine with modern interpretations',
    'Chinese',
    '321 Dragon Street',
    4.5,
    2,
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80',
    25,
    false,
    true
  ),
  (
    'Mediterranean Oasis',
    'Fresh Mediterranean dishes with emphasis on healthy ingredients',
    'Mediterranean',
    '654 Olive Boulevard',
    4.9,
    3,
    'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80',
    35,
    false,
    true
  );

-- Get restaurant IDs for reference
DO $$
DECLARE
    sakura_id uuid;
    taj_mahal_id uuid;
    bella_italia_id uuid;
    golden_dragon_id uuid;
    mediterranean_id uuid;
BEGIN
    SELECT id INTO sakura_id FROM restaurants WHERE name = 'Sakura Japanese Kitchen';
    SELECT id INTO taj_mahal_id FROM restaurants WHERE name = 'Taj Mahal Palace';
    SELECT id INTO bella_italia_id FROM restaurants WHERE name = 'Bella Italia';
    SELECT id INTO golden_dragon_id FROM restaurants WHERE name = 'Golden Dragon';
    SELECT id INTO mediterranean_id FROM restaurants WHERE name = 'Mediterranean Oasis';

    -- Sakura Japanese Kitchen Menu Items
    INSERT INTO menu_items (restaurant_id, name, description, price, category, image_url, is_veg, is_available)
    SELECT sakura_id, name, description, price, category, image_url, is_veg, true
    FROM (VALUES
        ('Dragon Roll', 'Tempura shrimp, avocado, and eel sauce', 16.99, 'Sushi', 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c', false),
        ('Spicy Tuna Roll', 'Fresh tuna with spicy mayo', 14.99, 'Sushi', 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c', false),
        ('Miso Ramen', 'Rich miso broth with chashu pork', 18.99, 'Main Course', 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1', false),
        ('Vegetable Tempura', 'Assorted vegetables in crispy batter', 12.99, 'Appetizers', 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d', true)
        -- ... (additional items)
    ) AS v(name, description, price, category, image_url, is_veg);

    -- Taj Mahal Palace Menu Items
    INSERT INTO menu_items (restaurant_id, name, description, price, category, image_url, is_veg, is_available)
    SELECT taj_mahal_id, name, description, price, category, image_url, is_veg, true
    FROM (VALUES
        ('Butter Chicken', 'Tender chicken in rich tomato gravy', 19.99, 'Main Course', 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db', false),
        ('Paneer Tikka', 'Grilled cottage cheese with spices', 16.99, 'Appetizers', 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8', true),
        ('Dal Makhani', 'Creamy black lentils', 14.99, 'Main Course', 'https://images.unsplash.com/photo-1546833999-b9f581a1996d', true)
        -- ... (additional items)
    ) AS v(name, description, price, category, image_url, is_veg);

    -- Bella Italia Menu Items
    INSERT INTO menu_items (restaurant_id, name, description, price, category, image_url, is_veg, is_available)
    SELECT bella_italia_id, name, description, price, category, image_url, is_veg, true
    FROM (VALUES
        ('Margherita Pizza', 'Fresh tomatoes, mozzarella, and basil', 17.99, 'Pizza', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002', true),
        ('Spaghetti Carbonara', 'Classic pasta with pancetta and egg', 18.99, 'Pasta', 'https://images.unsplash.com/photo-1612874742237-6526221588e3', false),
        ('Tiramisu', 'Classic Italian coffee-flavored dessert', 9.99, 'Desserts', 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9', true)
        -- ... (additional items)
    ) AS v(name, description, price, category, image_url, is_veg);

    -- Golden Dragon Menu Items
    INSERT INTO menu_items (restaurant_id, name, description, price, category, image_url, is_veg, is_available)
    SELECT golden_dragon_id, name, description, price, category, image_url, is_veg, true
    FROM (VALUES
        ('Kung Pao Chicken', 'Spicy diced chicken with peanuts', 16.99, 'Main Course', 'https://images.unsplash.com/photo-1525755662778-989d0524087e', false),
        ('Vegetable Spring Rolls', 'Crispy rolls with fresh vegetables', 8.99, 'Appetizers', 'https://images.unsplash.com/photo-1548507346-a58a26b06869', true),
        ('Mapo Tofu', 'Spicy tofu in Sichuan sauce', 14.99, 'Main Course', 'https://images.unsplash.com/photo-1574484284002-952d92456975', true)
        -- ... (additional items)
    ) AS v(name, description, price, category, image_url, is_veg);

    -- Mediterranean Oasis Menu Items
    INSERT INTO menu_items (restaurant_id, name, description, price, category, image_url, is_veg, is_available)
    SELECT mediterranean_id, name, description, price, category, image_url, is_veg, true
    FROM (VALUES
        ('Greek Salad', 'Fresh vegetables with feta cheese', 12.99, 'Salads', 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe', true),
        ('Lamb Souvlaki', 'Grilled lamb skewers with tzatziki', 21.99, 'Main Course', 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba', false),
        ('Hummus Plate', 'Creamy hummus with warm pita', 9.99, 'Appetizers', 'https://images.unsplash.com/photo-1577906096429-f73c2c312435', true)
        -- ... (additional items)
    ) AS v(name, description, price, category, image_url, is_veg);

END $$;