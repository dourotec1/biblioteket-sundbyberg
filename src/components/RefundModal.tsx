import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { VerificationCodeInput } from './VerificationCodeInput';

interface RefundModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

type Stage = 'verification' | 'processing' | 'stream';

export function RefundModal({ isOpen, onClose, amount }: RefundModalProps) {
  const [stage, setStage] = useState<Stage>('verification');

  const handleVerification = (code: string) => {
    setStage('processing');
    // Simulate processing time before showing stream
    setTimeout(() => {
      setStage('stream');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 shadow-xl">
        {stage === 'verification' && (
          <VerificationCodeInput onVerify={handleVerification} amount={amount} />
        )}
        
        {stage === 'processing' && (
          <div className="text-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-[#8c3a52] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Behandlar återbetalning</h3>
            <p className="text-gray-600">Bearbetar återbetalning på {amount} kr...</p>
          </div>
        )}

        {stage === 'stream' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4">
              <h3 className="text-xl font-semibold">Din återbetalning på {amount} kr har initierats</h3>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://player.twitch.tv/?channel=biblioteketsundbyberg&parent=${window.location.hostname}&autoplay=true&muted=true`}
                height="100%"
                width="100%"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 text-center p-4">
              Din återbetalning kommer att behandlas inom 3-5 arbetsdagar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
