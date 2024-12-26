import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-orange max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-600">
            We collect information that you provide directly to us, including name, contact information, delivery addresses, and payment details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to provide, maintain, and improve our services, process your orders, and communicate with you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;