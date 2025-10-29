import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCategories from '@/components/ProductCategories';
import DealsSection from '@/components/DealsSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ProductCategories />
        <DealsSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
