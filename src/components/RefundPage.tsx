import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { OrderDetails } from './OrderDetails';

export function RefundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Reklamering</h1>
          <OrderDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
}