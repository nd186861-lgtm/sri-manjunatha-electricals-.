
import { motion } from 'motion/react';
import { Target, Heart, Eye, Users, Zap, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function About() {
  return (
    <div className="pt-32 pb-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full">
              <Award className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Premium Electrical Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Quality Electrical Solutions for <span className="text-orange-500">Bengaluru</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Sri Manjunatha Electrical Service is a prominent Retailer and Service Provider of high-quality electrical components. Based in Bengaluru, we cater to both residential and industrial requirements with a focus on safety and durability.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-3xl font-black text-slate-900 leading-none mb-2">10k+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Customers</p>
              </div>
              <div className="border-l-4 border-slate-900 pl-6">
                <p className="text-3xl font-black text-slate-900 leading-none mb-2">500+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Projects Supplied</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200" 
              alt="Shop Front" 
              className="rounded-[4rem] aspect-[4/5] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-12 rounded-[3rem] hidden md:block">
              <p className="text-4xl font-black mb-1 italic">#1</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Choice for <br/>Contractors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Our Core Principles</h2>
            <p className="text-slate-500 max-w-xl mx-auto">We don't just sell switches and wires; we sell peace of mind and safety for your homes and offices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Uncompromising Quality', desc: 'We only stock certified, original products from reputable global and national brands.' },
              { icon: Heart, title: 'Customer First', desc: 'Expert advice from our seasoned staff to help you pick the right specifications for your needs.' },
              { icon: Users, title: 'Local Commitment', desc: 'Proudly serving the Bengaluru community with competitive pricing and dedicated support.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Spirit */}
      <section className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px]" />
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-md">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Expertise Matters</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Consult with our experts for your next electrical project
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto italic">
            "We believe that a well-lit home is a happy home. Our mission is to ensure every household in Bengaluru has access to the safest electrical materials."
          </p>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-orange-500 rounded-full mb-4 border-4 border-slate-800 flex items-center justify-center text-white font-bold">D</div>
            <p className="text-white font-bold tracking-tight">DEVARAJU N</p>
            <p className="text-xs text-orange-500 font-bold uppercase tracking-widest">Master Electrician & Contractor (20+ Years Exp)</p>
          </div>
        </div>
      </section>

      {/* Factsheet */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Business Factsheet</h2>
            <p className="text-slate-500 leading-relaxed">
              Standard operating details and business credentials for transparency and trust.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            {[
              { label: 'Nature of Business', value: 'Retailer & Service Provider' },
              { label: 'Expert Electrician', value: 'Devaraju N (20+ Years)' },
              { label: 'Service Type', value: 'Contract Work & Maintenance' },
              { label: 'Primary Service Area', value: 'Bengaluru & Karnataka' },
            ].map((fact, i) => (
              <div key={i} className="bg-white p-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 leading-none">{fact.label}</p>
                <p className="text-lg font-bold text-slate-900">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
