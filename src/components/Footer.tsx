import React from 'react';
import { Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#8c3a52] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakta oss</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Hallonbergen: 08-706 84 70</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Signalfabriken: 08-706 84 80</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:bibliotek@sundbyberg.se" className="hover:underline">
                  bibliotek@sundbyberg.se
                </a>
              </li>
            </ul>
          </div>

          {/* Good to Know Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bra att veta</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">A-Ö</a></li>
              <li><a href="#" className="hover:underline">Låneregler</a></li>
              <li><a href="#" className="hover:underline">Skaffa bibliotekskort</a></li>
              <li><a href="#" className="hover:underline">Så hanterar vi personuppgifter</a></li>
              <li><a href="#" className="hover:underline">Tillgänglighet</a></li>
              <li><a href="#" className="hover:underline">Vanliga frågor</a></li>
            </ul>
          </div>

          {/* Settings Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Inställningar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Inställningar för cookies</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Besök oss i sociala medier</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <Facebook className="h-4 w-4" />
                  <span>Biblioteket på Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <Instagram className="h-4 w-4" />
                  <span>Biblioteket på Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <MapPin className="h-4 w-4" />
                  <span>Hitta till oss</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}