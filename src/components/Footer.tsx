import React from 'react';
import { ShoppingBag, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Yori Yori <span className="text-emerald-500 text-lg">Mtumba</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your number one destination for premium second-hand clothing and shoes in Nairobi. Quality you can trust, styles you'll love.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500">Collections</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">Men's Apparel</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Women's Fashion</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Kids' Wear</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Footwear</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500">Customer Support</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Inquiry Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Ordering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery Info</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500">Find Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Gikomba Market, Section 3, Stall 45B, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>hello@yoriyorimtumba.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Yori Yori Mtumba Investment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};