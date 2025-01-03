import React from 'react';
import { HelpCircle } from 'lucide-react';

export function HelpNotice() {
  return (
    <div className="bg-[#8c3a52]/10 rounded-lg p-6 mb-8">
      <h2 className="text-[#8c3a52] text-xl font-semibold flex items-center gap-2">
        <HelpCircle className="h-5 w-5" />
        Hjälpcenter för återlämning
      </h2>
      <p className="mt-2 text-gray-700">
        Välkommen till vårt hjälpcenter för återlämning av böcker. 
        Här kan du hantera dina återbetalningar för böcker som inte finns i vårt bibliotek.
      </p>
    </div>
  );
}