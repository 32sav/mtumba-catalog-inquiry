import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoreDashboard } from './components/StoreDashboard';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <StoreDashboard />
        <section id="catalog" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Product Catalog</h2>
              <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
            </div>
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;