import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { MenuItem } from '../../types';
import useCartStore from '../../stores/cartStore';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { items, addItem, removeItem, updateQuantity } = useCartStore();
  const quantity = items.find((i) => i.id === item.id)?.quantity || 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
      <img
        src={item.image_url}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="ml-4 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">${item.price}</span>
            <div className="flex items-center space-x-2">
              {quantity > 0 && (
                <>
                  <button
                    onClick={() => updateQuantity(item.id, quantity - 1)}
                    className="p-1 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span>{quantity}</span>
                </>
              )}
              <button
                onClick={() => addItem(item)}
                className="p-1 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        {item.is_veg && (
          <span className="inline-block px-2 py-1 bg-green-100 text-green-600 text-xs rounded mt-2">
            Vegetarian
          </span>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;