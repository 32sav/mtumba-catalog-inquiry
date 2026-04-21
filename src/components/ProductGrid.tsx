import React, { useState, useMemo } from 'react';
import { products, Product, Category } from '@/data/products';
import { ProductCard } from './ProductCard';
import { Input } from '@/components/ui/input';
import { Search, PackageOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export const ProductGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: "All Items" },
    { id: 'men-clothes', label: "Men's Clothes" },
    { id: 'women-clothes', label: "Women's Clothes" },
    { id: 'kids-clothes', label: "Kids' Clothes" },
    { id: 'shoes', label: "Shoes" },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const handleWhatsApp = (product: Product) => {
    const message = encodeURIComponent(`Hi Yori Yori, I'm interested in the ${product.name} (${product.price}). Please tell me more.`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
    toast.success("Opening WhatsApp...");
  };

  return (
    <section id="catalog" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Latest Arrivals</h2>
              <p className="text-muted-foreground">Premium clothes and shoes curated for you.</p>
            </div>
            
            <div className="flex flex-col sm:row gap-4 w-full md:max-w-md">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search items..." 
                  className="pl-9 bg-white border-none shadow-sm rounded-xl focus-visible:ring-emerald-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex p-1 bg-white rounded-2xl shadow-sm border w-fit">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
                    activeCategory === cat.id 
                      ? 'bg-emerald-600 text-white shadow-md' 
                      : 'text-muted-foreground hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <div className="p-6 bg-white rounded-full shadow-sm text-muted-foreground">
                <PackageOpen className="w-12 h-12" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">No items found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                className="mt-2 rounded-xl"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl border-none shadow-2xl">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square relative overflow-hidden bg-white">
                <img 
                  src={selectedProduct.image_url} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col gap-6 bg-white">
                <DialogHeader className="p-0 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none capitalize px-3 py-1">
                      {selectedProduct.category.replace('-', ' ')}
                    </Badge>
                    <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-3 py-1">
                      {selectedProduct.condition}
                    </Badge>
                    {selectedProduct.size && (
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-none px-3 py-1">
                        Size: {selectedProduct.size}
                      </Badge>
                    )}
                  </div>
                  <DialogTitle className="text-3xl font-bold leading-tight">
                    {selectedProduct.name}
                  </DialogTitle>
                  <p className="text-3xl font-bold text-emerald-600">
                    {selectedProduct.price}
                  </p>
                </DialogHeader>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Item Description</h4>
                  <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                    {selectedProduct.description}
                  </DialogDescription>
                </div>

                <div className="mt-auto space-y-4 pt-6 border-t">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    Available for Immediate Order
                  </div>
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-14 text-lg font-bold rounded-2xl shadow-lg transition-transform active:scale-95"
                    onClick={() => handleWhatsApp(selectedProduct)}
                  >
                    Buy via WhatsApp
                  </Button>
                  <p className="text-center text-xs text-muted-foreground font-medium">
                    Contact seller for delivery and payment details
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};