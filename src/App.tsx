/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home 
          onExplore={() => setActiveSection('products')} 
        />;
      case 'products':
        return <Products />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onExplore={() => setActiveSection('products')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {renderSection()}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

