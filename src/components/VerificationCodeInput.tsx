import React, { useState } from 'react';

interface VerificationCodeInputProps {
  onVerify: (code: string) => void;
  amount: number;
}

export function VerificationCodeInput({ onVerify, amount }: VerificationCodeInputProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError('Koden måste vara 6 siffror');
      return;
    }
    onVerify(code);
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">Verifiera återbetalning</h3>
      <p className="text-gray-600 mb-4">
        För att fortsätta med din återbetalning på {amount} kr, vänligen ange den 6-siffriga koden som supporten har gett dig.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, '');
              setCode(value);
              setError('');
            }}
            placeholder="Ange 6-siffrig kod"
            className="w-full px-4 py-2 border rounded-md focus:border-[#8c3a52] focus:ring-1 focus:ring-[#8c3a52] outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-[#8c3a52] text-white py-2 px-4 rounded-md hover:bg-[#8c3a52]/90 transition-colors"
        >
          Verifiera
        </button>
      </form>
    </div>
  );
}