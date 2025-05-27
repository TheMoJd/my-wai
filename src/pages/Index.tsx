
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Process from '../components/Process';
import BookDemo from '../components/BookDemo';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <BookDemo />
      <Testimonials />
      <Pricing />
      {/* <ContactSection /> */}
      <FAQ />
      <Footer />
      
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-mywai text-white rounded-full flex items-center justify-center shadow-lg hover:bg-mywai-dark transition-colors z-50"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
