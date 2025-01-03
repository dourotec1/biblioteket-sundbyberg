import React, { useState } from 'react';
import { Receipt, AlertCircle } from 'lucide-react';
import { RefundModal } from './RefundModal';

export function OrderDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orderDate = "2024-03-15";
  const orderNumber = "2024-0315-789";
  const quantity = 25;
  const pricePerBook = 192; // 4800 / 25
  const totalAmount = quantity * pricePerBook;

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Orderdetaljer</h2>
            <p className="text-gray-600">Ordernummer: {orderNumber}</p>
            <p className="text-gray-600">Orderdatum: {orderDate}</p>
          </div>
          <Receipt className="h-6 w-6 text-[#8c3a52]" />
        </div>

        <div className="border-t border-b border-gray-200 py-4 my-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://m.media-amazon.com/images/I/51ImL-7hedL._SY466_.jpg" 
              alt="The Art of Making Money" 
              className="w-24 h-32 object-cover rounded"
            />
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">The Art of Making Money: The Story of a Master Counterfeiter</h3>
              <p className="text-gray-600">Hardcover</p>
              <p className="text-gray-600">Antal: {quantity} st</p>
              <p className="text-gray-600">Pris per bok: {pricePerBook} kr</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 text-red-700">
            <AlertCircle className="h-5 w-5" />
            <p className="font-medium">Boken finns tyvärr inte i vårt bibliotek</p>
          </div>
          <p className="text-red-600 mt-1">Vi beklagar att denna bok inte finns tillgänglig i vårt sortiment. Du kan begära återbetalning nedan.</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-lg">
            <span className="font-medium">Totalt att återbetala:</span>
            <span className="font-bold text-[#8c3a52]">{totalAmount} kr</span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#8c3a52] text-white py-3 px-4 rounded-md hover:bg-[#8c3a52]/90 transition-colors font-medium"
          >
            Begär Reklamering
          </button>
        </div>
      </div>

      <RefundModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={totalAmount}
      />
    </>
  );
}