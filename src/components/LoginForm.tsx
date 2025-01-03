import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [libraryCard, setLibraryCard] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(); // In a real app, we would validate credentials here
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Logga in</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="libraryCard" className="block text-sm font-medium text-gray-700">
            Bibliotekskort eller personnummer
          </label>
          <input
            type="text"
            id="libraryCard"
            placeholder="ÅÅMMDDXXXX"
            value={libraryCard}
            onChange={(e) => setLibraryCard(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8c3a52] focus:outline-none focus:ring-1 focus:ring-[#8c3a52]"
          />
        </div>

        <div>
          <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
            PIN-kod
          </label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8c3a52] focus:outline-none focus:ring-1 focus:ring-[#8c3a52]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#8c3a52] text-white py-2 px-4 rounded-md hover:bg-[#8c3a52]/90 transition-colors"
        >
          OK
        </button>
      </form>

      <div className="mt-6 space-y-4">
        <a href="#" className="block text-[#8c3a52] hover:underline text-sm text-center">
          Har du glömt PIN-koden?
        </a>
        
        <a href="#" className="flex items-center justify-center text-[#8c3a52] hover:underline text-sm gap-2">
          <UserPlus className="h-4 w-4" />
          Ny på biblioteket? Skaffa lånekort
        </a>
      </div>
    </div>
  );
}