import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const StoreDashboard: React.FC = () => {
  const locations = [
    { name: "Juja", status: "Open Now", address: "Main Stage, Kalimoni" },
    { name: "Thika", status: "Open Now", address: "Commercial Area, CBD" },
    { name: "Rongai", status: "Open Now", address: "Tuskys Stage Area" }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "0750269821",
      link: "tel:0750269821",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kinyuamark677@gmail.com",
      link: "mailto:kinyuamark677@gmail.com",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "WhatsApp",
      value: "Chat with Us",
      link: "https://wa.me/254750269821",
      color: "bg-emerald-500/10 text-emerald-600"
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider mb-4"
          >
            Store Dashboard
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Visit Our <span className="text-emerald-600">Physical Hubs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Experience the quality firsthand. We have branches strategically located across major hubs to bring premium fashion closer to you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Image & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] group">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/store-background-edeff891-1776780824173.webp"
                alt="Store Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="flex items-center gap-4 text-white/80 mb-4">
                  <div className="flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Live Stock
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    Open 8:00 AM - 7:00 PM
                  </div>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">Yori Yori Flagship Store</h3>
                <p className="text-white/70 max-w-md">Our flagship store offers the widest variety of hand-picked premium items for men and women.</p>
              </div>
            </div>

            {/* Contact Grid */}
            <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="group"
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className={`p-3 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-semibold text-slate-900 truncate">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Branch Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Branch Locations</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                  View Map <ExternalLink className="ml-1 w-3 h-3" />
                </Button>
              </div>

              <div className="space-y-4">
                {locations.map((loc, idx) => (
                  <motion.div
                    key={loc.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{loc.name}</h4>
                          <p className="text-sm text-slate-500 mt-1">{loc.address}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full">
                        {loc.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShoppingBag className="w-20 h-20 rotate-12" />
                  </div>
                  <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2">Join the Community</p>
                  <h4 className="text-lg font-bold mb-4">Subscribe for Stock Alerts</h4>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 rounded-xl">Join</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Trust Card */}
            <Card className="bg-emerald-600 text-white border-none shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-600 bg-emerald-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold">Over 2,000+ happy shoppers</p>
                    <p className="text-xs text-emerald-100">Join our fashion movement today!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Internal icon for the TRUST card
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);