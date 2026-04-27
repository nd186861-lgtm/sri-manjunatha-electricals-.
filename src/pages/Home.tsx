
import { motion } from 'motion/react';
import { ArrowRight, Star, Zap, ShieldCheck, Clock, Award, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../constants';

interface HomeProps {
  onExplore: () => void;
}

export default function Home({ onExplore }: HomeProps) {
  return (
    <div className="space-y-32 mb-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full mb-8"
          >
            <Star className="h-4 w-4 fill-orange-500" />
            <span className="text-xs font-bold uppercase tracking-wider">Top Rated Electrical Shop in Bengaluru</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]"
          >
            Reliable <span className="text-orange-500">Electrical Services</span> & Premium Supplies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-500 mb-10 leading-relaxed"
          >
            Sri Manjunatha Electrical Service is a prominent Retailer and Service Provider of high-quality electrical components like Switchgear, Cables, and Modular Switches in Bengaluru.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 w-full md:w-auto justify-center"
            >
              <span>Call Us Now</span>
              <Phone className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900"
          >
            <img 
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1600" 
              alt="Premium Electrical Experience"
              className="w-full h-full object-cover opacity-70"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-8 md:p-16 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Premium Showroom</span>
                  <div className="h-px w-12 bg-white/30"></div>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest italic">Since 1998</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter italic">World Class <span className="text-orange-500">Inventory</span></h2>
                <p className="text-slate-300 font-medium text-lg max-w-xl mb-8">Professional distribution of Orient, Usha, Havells, and Finolex. Guaranteed authenticity for every single component.</p>
                <div className="flex space-x-4">
                  <button 
                    onClick={onExplore}
                    className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl flex items-center group"
                  >
                    Explore Shop
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/20 blur-[100px] -z-10 rounded-full" />
        <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/30 blur-[80px] -z-10 rounded-full" />
      </section>

      {/* Stats/Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Award, label: 'Expert Experience', val: '20+' },
            { icon: Zap, label: 'Products', val: '500+' },
            { icon: ShieldCheck, label: 'Authentic Brands', val: '10+' },
            { icon: Clock, label: 'Service Support', val: 'Fast' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-50 text-center shadow-sm"
            >
              <stat.icon className="h-6 w-6 text-orange-500 mx-auto mb-4" />
              <p className="text-3xl font-extrabold text-slate-900 mb-1">{stat.val}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Why Bengaluru Trusts Us for <span className="text-orange-500">20+ Years</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">We don't just sell components; we provide safety and reliability. From small residential fixes to massive industrial builds, our components are the backbone of Bengaluru's infrastructure.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Quality Assurance', desc: 'Every product is sourced directly from authorized manufacturers with full warranty support.' },
                { title: 'Expert Guidance', desc: 'Our team includes master electricians who help you choose the right gauge and switchgear for your load.' },
                { title: 'Project Ready Stock', desc: 'Massive inventory to support immediate requirements for multi-story residential projects.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905235277-20593798950d?auto=format&fit=crop&q=80&w=1200" 
                alt="Electrical Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 max-w-xs">
              <p className="text-4xl font-black text-orange-500 mb-2">100%</p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Genuine Brand Certified Inventory</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Top Categories</h2>
            <p className="text-slate-500 max-w-xl">We supply quality materials from standard household lighting to heavy-duty industrial switchgear components.</p>
          </div>
          <button 
            onClick={onExplore}
            className="text-orange-600 font-bold flex items-center space-x-2 group shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.isFeatured).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={onExplore}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-white border border-slate-100 p-8">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400";
                  }}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <span className="bg-slate-900/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 w-fit">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-slate-900">{product.priceRange || "Price on Request"}</span>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-tighter">In Stock</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Trust */}
      <section className="bg-slate-50 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-12">Authorized Dealer for Major Brands</p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            {['Anchor', 'Legrand', 'Schneider', 'Havells', 'Finolex', 'Polycab'].map(brand => (
              <span key={brand} className="text-3xl font-black text-slate-900 tracking-tighter italic">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
