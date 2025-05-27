import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from './ui/button/Button';

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
          <div className="relative h-20 w-20"> {/* Changed from h-12 w-12 to h-16 w-16 */}
            <img
              src="/logo_mywai.png"
              alt="Logo MyWai"
              className="h-full w-full object-contain"
            />
          </div>
        </a>

        {/* Desktop Menu */}        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-mywai transition-colors">MyWai, c'est quoi ?</a>
          <a href="#testimonials" className="text-foreground hover:text-mywai transition-colors">Mon compte</a>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="!bg-mywai hover:!bg-mywai-dark !text-white"
          >
            Essayer gratuitement
          </Button>
        </div>        {/* Mobile Menu Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden !border-none !p-2"
          startIcon={isMenuOpen ? <X /> : <Menu />}
        >
          <span className="sr-only">Menu</span>
        </Button>
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
              MyWai, c'est quoi ?
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-mywai py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mon compte
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="!bg-mywai hover:!bg-mywai-dark !text-white w-full"
            >
              Essayer gratuitement
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
