import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">Yori Yori <span className="text-foreground/70">Mtumba</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Catalog</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground/70"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-in fade-in slide-in-from-top-4">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#catalog" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>Catalog</a>
            <a href="#about" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="text-lg font-medium py-2 border-b" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};