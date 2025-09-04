import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroB2B from '@/components/B2B/HeroB2B';
import StoryValueB2B from '@/components/B2B/StoryValueB2B';
import ProcessB2B from '@/components/B2B/ProcessB2B';
import PricingB2B from '@/components/B2B/PricingB2B';
import TestimonialsB2B from '@/components/B2B/TestimonialsB2B';
import ContactB2B from '@/components/B2B/ContactB2B';

const Entreprise = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroB2B />
      <StoryValueB2B />
      <ProcessB2B />
      <TestimonialsB2B />
      <PricingB2B />
      <ContactB2B />
      <Footer />
    </div>
  );
};

export default Entreprise;