import React from 'react';
import { Product } from '@/data/products';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(`Hi Yori Yori, I'm interested in the ${product.name} priced at ${product.price}. Is it still available?`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Card 
        className="group cursor-pointer overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white rounded-2xl"
        onClick={() => onClick(product)}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
          <img 
            src={product.image_url} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge className="bg-white/95 text-slate-900 hover:bg-white backdrop-blur-sm border-none shadow-sm capitalize font-medium py-1">
              {product.category.replace('-', ' ')}
            </Badge>
          </div>
          <Badge className="absolute top-3 right-3 bg-emerald-600 text-white border-none shadow-sm font-semibold py-1">
            {product.condition}
          </Badge>
          {product.size && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-slate-900/80 text-white backdrop-blur-md border-none flex items-center gap-1.5 py-1">
                <Ruler className="w-3 h-3" />
                {product.size}
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-5 flex-grow flex flex-col gap-2.5">
          <h3 className="font-bold text-lg leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-emerald-600 font-extrabold text-2xl">{product.price}</p>
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none rounded-xl h-12 font-bold shadow-md transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Inquire on WhatsApp
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};