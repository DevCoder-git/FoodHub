import React from 'react';
import { Check, Clock, Package, Truck } from 'lucide-react';

interface OrderTrackerProps {
  status: string;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ status }) => {
  const steps = [
    { id: 'confirmed', label: 'Confirmed', icon: Check },
    { id: 'preparing', label: 'Preparing', icon: Package },
    { id: 'out_for_delivery', label: 'Out for Delivery', icon: Truck },
    { id: 'delivered', label: 'Delivered', icon: Clock },
  ];

  const currentStep = steps.findIndex((step) => step.id === status);

  return (
    <div className="py-4">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm mt-2 text-center">{step.label}</div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-full mt-4 ${
                    index < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracker;