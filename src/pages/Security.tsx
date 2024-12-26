import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Security = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Security</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="h-12 w-12 text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
          <p className="text-gray-600">
            Your data is encrypted and stored securely using industry-standard protocols.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Lock className="h-12 w-12 text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Secure Payments</h2>
          <p className="text-gray-600">
            All payment transactions are encrypted and processed securely.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Eye className="h-12 w-12 text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Privacy First</h2>
          <p className="text-gray-600">
            We never share your personal information with unauthorized parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;