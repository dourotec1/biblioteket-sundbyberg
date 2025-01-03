import React from 'react';
import { Volume2, Clock, Globe, User } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-[#8c3a52] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <img 
            src="https://bibliotek.sundbyberg.se/image/layout_set_logo?img_id=358065&t=1735528159420" 
            alt="Bibliotek Sundbyberg"
            className="h-12"
          />
          
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Volume2 className="h-5 w-5" />
                  <span>Lyssna</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Clock className="h-5 w-5" />
                  <span>Öppettider</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Globe className="h-5 w-5" />
                  <span>Språk</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <User className="h-5 w-5" />
                  <span>Logga in</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}