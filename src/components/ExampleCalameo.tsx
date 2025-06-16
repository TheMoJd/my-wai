import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Button from './ui/button/Button';
import { Modal } from './ui/modal';

const ExampleCalameo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  // const chapters = [ // Commented out
  //   {
  //     title: "L'enfance",
  //     content: "Les premières années sont souvent les plus formatrices. Ce chapitre explore les souvenirs d'enfance, les moments qui ont façonné la personnalité et les premières passions qui se sont développées.",
  //     image: "bg-gradient-to-br from-mywai-light to-mywai",
  //     icon: <BookOpen className="h-5 w-5" />
  //   },
  //   {
  //     title: "Les amitiés",
  //     content: "Les relations qui ont marqué une vie entière, des amitiés d'école aux rencontres qui ont changé le cours d'une existence. Des témoignages sincères de ceux qui ont partagé les bons et les mauvais moments.",
  //     image: "bg-gradient-to-br from-mywai/40 to-mywai",
  //     icon: <Heart className="h-5 w-5" />
  //   },
  //   {
  //     title: "Les passions",
  //     content: "Qu'il s'agisse d'art, de sport, de voyages ou de cuisine, ce chapitre célèbre les passions qui animent la personne et la rendent unique aux yeux de ses proches.",
  //     image: "bg-gradient-to-br from-mywai/60 to-mywai-dark",
  //     icon: <Star className="h-5 w-5" />
  //   },
  //   {
  //     title: "La vie professionnelle",
  //     content: "Les réussites, les défis et les apprentissages tirés du parcours professionnel, racontés par des collègues, mentors et partenaires qui ont accompagné ce cheminement.",
  //     image: "bg-gradient-to-br from-mywai-light/80 to-mywai-dark",
  //     icon: <Briefcase className="h-5 w-5" />
  //   },
  //   {
  //     title: "La vie de famille",
  //     content: "Les moments précieux passés en famille, les traditions, les vacances mémorables et les liens indéfectibles qui unissent parents et enfants, frères et sœurs.",
  //     image: "bg-gradient-to-br from-mywai/30 to-mywai-dark/90",
  //     icon: <Home className="h-5 w-5" />
  //   },
  //   {
  //     title: "Les valeurs",
  //     content: "Les principes, les convictions et la sagesse que la personne a partagés avec son entourage et qui continueront d'inspirer les générations futures.",
  //     image: "bg-gradient-to-br from-mywai-light/70 to-mywai-dark",
  //     icon: <Users className="h-5 w-5" />
  //   }
  // ];

  return (
    <section className="section-padding bg-cream relative" id="demo">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-mywai/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-mywai-light/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="section-title !mb-0 text-center">
            Découvrez un extrait de livre biographique
          </h2>
        </div>
        <p className="section-subtitle text-center">
          Un livre composé d'une cinquantaine de pages découpé en plusieurs chapitres thématiques qui retrace une vie à travers les souvenirs et témoignages des proches, amis, collègue et famille.        </p>        {/* Calaméo Embed Integration */}
        <div className="mt-12 max-w-6xl mx-auto text-center">
          <img 
            src="/calameo-popup.png" 
            alt="Cliquez pour ouvrir le livre feuilletable" 
            className="mx-auto cursor-pointer hover:opacity-80 transition-opacity duration-300" 
            onClick={handleImageClick}
          />
        </div>
        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="md"
            endIcon={<ArrowRight className="h-4 w-4" />}
            onClick={() => window.location.href = 'https://mywai.softwarexnihilo.com/session/new'}
            className="!bg-mywai hover:!bg-mywai-dark !text-white shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Créer une biographie
          </Button>        
        </div>
      </div>

      {/* Modal avec Calaméo feuilletable */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        className="max-w-7xl mx-4"
        isFullscreen={false}
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-center mb-6 text-mywai">
            Extrait de livre biographique MyWai
          </h3>
          <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video bg-gray-100">
            <iframe 
              src="//v.calameo.com/?bkcode=007887638a76298bca9cd&authid=BnuMmf5tfguS&mode=viewer&bgColor=F3F4F6" 
              frameBorder="0" 
              scrolling="no" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full"
              title="Extrait de livre MyWai sur Calaméo"
              {...({ allowtransparency: "true" } as any)}
            />
          </div>
          <div className="mt-4 text-center">
            <a 
              href="https://www.calameo.com/books/007887638a76298bca9cd?authid=BnuMmf5tfguS" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-mywai hover:underline text-sm"
            >
              Ouvrir en plein écran sur Calaméo
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ExampleCalameo;
