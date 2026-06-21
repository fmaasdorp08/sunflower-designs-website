import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLenis, getLenis } from '@/hooks/useLenis';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/CustomCursor';
import PreviewGate from '@/components/PreviewGate';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import CollectionPage from '@/pages/CollectionPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function AppContent() {
  useLenis();

  return (
    <PreviewGate>
      <CustomCursor />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </PreviewGate>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
