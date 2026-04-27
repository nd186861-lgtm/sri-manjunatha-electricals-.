
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in electrical materials/services from Sri Manjunatha Electrical Service. Can you provide a price list?")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageSquare className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
        Chat with us
      </span>
      <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </motion.a>
  );
}
