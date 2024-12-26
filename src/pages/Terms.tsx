import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-orange max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using FoodHub's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
          <p className="text-gray-600">
            You agree to use FoodHub's services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Ordering and Delivery</h2>
          <p className="text-gray-600">
            All orders are subject to availability and confirmation of the order price. Delivery times are estimates and may vary based on circumstances.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;