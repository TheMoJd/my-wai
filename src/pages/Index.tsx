import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LazyWrapper from '../components/ui/loading/LazyWrapper';
import LoadingSpinner from '../components/ui/loading/LoadingSpinner';
import Button from '../components/ui/button/Button';

// Lazy load des composants lourds
const Process = lazy(() => import('../components/Process'));
const BookDemo = lazy(() => import('../components/BookDemo'));
const Pricing = lazy(() => import('../components/Pricing'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <LazyWrapper 
        minHeight="400px"
        fallback={
          <div className="section-padding bg-white flex items-center justify-center">
            <LoadingSpinner size="lg" text="Chargement du processus..." />
          </div>
        }
      >
        <Process />
      </LazyWrapper>
      
      <LazyWrapper 
        minHeight="600px"
        fallback={
          <div className="section-padding bg-cream flex items-center justify-center">
            <LoadingSpinner size="lg" text="Chargement de la démonstration..." />
          </div>
        }
      >
        <BookDemo />
      </LazyWrapper>
      
      <LazyWrapper 
        minHeight="400px"
        fallback={
          <div className="section-padding bg-white flex items-center justify-center">
            <LoadingSpinner size="lg" text="Chargement des témoignages..." />
          </div>
        }
      >
        <Testimonials />
      </LazyWrapper>
      
      <LazyWrapper 
        minHeight="500px"
        fallback={
          <div className="section-padding bg-cream flex items-center justify-center">
            <LoadingSpinner size="lg" text="Chargement des tarifs..." />
          </div>
        }
      >
        <Pricing />
      </LazyWrapper>
      
      <LazyWrapper 
        minHeight="400px"
        fallback={
          <div className="section-padding bg-white flex items-center justify-center">
            <LoadingSpinner size="lg" text="Chargement des questions fréquentes..." />
          </div>
        }
      >
        <FAQ />
      </LazyWrapper>
      
      <LazyWrapper 
        minHeight="300px"
        fallback={
          <div className="bg-mywai-dark text-white flex items-center justify-center" style={{ minHeight: '300px' }}>
            <LoadingSpinner size="lg" text="Chargement du pied de page..." />
          </div>
        }
      >
        <Footer />
      </LazyWrapper>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-mywai text-white rounded-full flex items-center justify-center shadow-lg hover:bg-mywai-dark transition-colors z-50"
        title={t('back_to_top')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
