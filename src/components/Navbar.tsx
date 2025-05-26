
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-12 w-12">
            <svg viewBox="0 0 100 100" className="h-full w-full fill-mywai">
              <path d="M50,10 C60,20 70,25 80,35 C70,45 60,50 50,60 C40,50 30,45 20,35 C30,25 40,20 50,10 Z" />
              <path d="M30,60 C40,70 50,75 70,85 C60,90 40,90 30,85 C20,80 20,65 30,60 Z" />
            </svg>
          </div>
          <span className="text-2xl font-display font-bold text-mywai-dark">MyWai</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-mywai transition-colors">À propos</a>
          <a href="#process" className="text-foreground hover:text-mywai transition-colors">Processus</a>
          <a href="#demo" className="text-foreground hover:text-mywai transition-colors">Démo</a>
          <a href="#pricing" className="text-foreground hover:text-mywai transition-colors">Prix</a>
          <a href="#testimonials" className="text-foreground hover:text-mywai transition-colors">Avis</a>
          <a href="#contact" className="btn-demo">Essayer</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-foreground hover:text-mywai py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#process" 
              className="text-foreground hover:text-mywai py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Processus
            </a>
            <a 
              href="#demo" 
              className="text-foreground hover:text-mywai py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Démo
            </a>
            <a 
              href="#pricing" 
              className="text-foreground hover:text-mywai py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Prix
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-mywai py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Avis
            </a>
            <a 
              href="#contact"
              className="btn-demo inline-block text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Essayer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
