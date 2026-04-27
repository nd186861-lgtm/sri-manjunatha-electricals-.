
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, ShoppingCart, Tag, CheckCircle2, Info } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Product Catalog</h1>
          <p className="text-slate-500">Explore our wide range of premium electrical supplies and appliances.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 w-full sm:w-64 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center space-x-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
        <div className="flex items-center space-x-2 shrink-0">
          <Filter className="h-4 w-4 text-slate-400" />
          <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Filter:</span>
        </div>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="aspect-square relative overflow-hidden bg-white border-b border-slate-50 p-10">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400";
                  }}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6 flex flex-col space-y-2">
                  <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xl w-fit">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">SKU: #00{product.id}</span>
                    <div className="flex items-center space-x-1 text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                      <CheckCircle2 className="h-3 w-3" />
                      <span className="text-[10px] font-bold uppercase">{product.stockStatus || 'In Stock'}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">
                      {product.priceRange || "Price on Request"}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919845932212?text=I'm interested in ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-100"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-32 bg-slate-50 rounded-[4rem]">
          <div className="max-w-xs mx-auto">
            <Search className="h-12 w-12 text-slate-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-500">We couldn't find any products matching your search or category selection.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 text-slate-900 font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
