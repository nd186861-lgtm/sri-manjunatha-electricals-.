
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap, Phone, ShoppingBag, Info, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: ShoppingBag },
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <div className="bg-orange-500 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white fill-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold text-slate-900 leading-none">Manjunatha</span>
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">Electrical Service</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-bold transition-colors hover:text-orange-500 uppercase tracking-wider ${
                  activeSection === item.id ? 'text-orange-500' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="mailto:nd186861@gmail.com?subject=Enquiry from Website"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg shadow-slate-100"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-colors ${
                    activeSection === item.id ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
