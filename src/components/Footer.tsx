
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <Zap className="h-6 w-6 text-orange-500 fill-orange-500" />
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-tight">Manjunatha</span>
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest leading-none mt-1">Electrical Service</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for high-quality electrical supplies in Bengaluru. We specialize in industrial, commercial, and residential electrical solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors bg-white/5 p-2 rounded-lg"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-orange-500 transition-colors bg-white/5 p-2 rounded-lg"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-orange-500 transition-colors bg-white/5 p-2 rounded-lg"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Switchgear Solutions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Project Supply</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Store Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold mb-6">Business Hours</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm font-medium text-white mb-2">{BUSINESS_INFO.workingHours.days}</p>
              <p className="text-2xl font-bold text-orange-500">{BUSINESS_INFO.workingHours.time}</p>
              <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest">Sundays Closed</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Sri Manjunathe Electricals. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
