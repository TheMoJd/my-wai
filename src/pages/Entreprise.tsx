import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Entreprise = () => {
  // i18n hook reserved for future localized content on this page
  useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      
    
      <FAQ />
      <Footer />
    </div>
  );
};

export default Entreprise;