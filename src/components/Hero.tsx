import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, ShieldCheck, Shirt } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-emerald-50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Fresh Arrivals Daily
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Premium <span className="text-emerald-600">Clothes & Shoes</span> for Your Best Look.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Browse our curated collection of high-quality second-hand fashion. Sustainable, stylish, and affordable items just for you.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" className="rounded-full bg-emerald-600 hover:bg-emerald-700 h-12 px-8 text-lg shadow-lg shadow-emerald-200" asChild>
                <a href="#catalog">
                  Browse Catalog
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-lg border-2">
                Contact Seller
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col gap-2">
                <div className="p-2 bg-white rounded-lg shadow-sm w-fit border border-slate-100">
                  <ShoppingCart className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold">Easy Choice</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-2 bg-white rounded-lg shadow-sm w-fit border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold">Premium Quality</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-2 bg-white rounded-lg shadow-sm w-fit border border-slate-100">
                  <Shirt className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold">Newest Styles</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-200 rotate-1">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/men-s-button-down-shirt-923c4fd3-1776778945423.webp" 
                alt="Hero Fashion" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Abstract Shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};