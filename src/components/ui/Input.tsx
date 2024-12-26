import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={`w-full rounded-lg border border-gray-300 ${
            icon ? 'pl-10' : 'pl-4'
          } pr-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;