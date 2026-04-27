
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.00000000000!2d77.56!3d12.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160000000001%3A0x0!2zMTLCsDU3JzM2LjAiTiA3N8KwMzMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin";

  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-5xl font-bold text-slate-900 tracking-tight">Get in Touch</h1>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">Have a question? Visit our store in Chamrajpet or call us directly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-2xl mx-auto">
        {/* Contact info cards */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm space-y-4">
            <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center">
              <MapPin className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Visit Store</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{BUSINESS_INFO.address}</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-orange-600 font-bold text-sm hover:underline pt-2"
            >
              <span>Get Directions</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm space-y-4">
            <div className="bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Call Us</h3>
            <div className="space-y-1">
              <p className="text-sm text-slate-500">Shop Enquiries:</p>
              <p className="font-bold text-slate-900">{BUSINESS_INFO.phone}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-slate-500">Contract Work (Devaraju N):</p>
              <p className="font-bold text-slate-900">9902145266</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm space-y-4">
            <div className="bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Opening Hours</h3>
            <div className="space-y-1">
              <p className="text-sm text-slate-500">{BUSINESS_INFO.workingHours.days}</p>
              <p className="font-bold text-slate-900">{BUSINESS_INFO.workingHours.time}</p>
            </div>
            <p className="text-xs text-red-500 font-bold uppercase tracking-widest pt-2">Closed on Sundays</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl h-[400px] relative">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute top-8 left-8 bg-slate-900 text-white p-6 rounded-2xl shadow-xl hidden md:block">
          <p className="font-bold text-lg mb-1">Manjunathe Electricals</p>
          <p className="text-xs text-slate-400">Nandini Layout, Bengaluru</p>
          <div className="mt-4 flex items-center space-x-2 text-orange-500 font-bold text-xs">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span>OPEN NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
