import React from 'react'; // Removed useState
import { ArrowRight, BookOpen } // Removed Heart, Users, Briefcase, Home, Star, Eye, Download
  from 'lucide-react';
import Button from './ui/button/Button';
// import Badge from './ui/badge/Badge'; // Commented out
// import Alert from './ui/alert/Alert'; // Commented out

const BookDemo = () => {
  // const [activeTab, setActiveTab] = useState(0); // Commented out
  // const [isModalOpen, setIsModalOpen] = useState(false); // Commented out
  // const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Commented out
  
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

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <h2 className="section-title !mb-0 text-center">
            Découvrez un extrait de livre biographique
          </h2>
        </div>
        <p className="section-subtitle text-center">
          Un livre composé d'une cinquantaine de pages découpé en plusieurs chapitres thématiques qui retrace une vie à travers les souvenirs et témoignages des proches, amis, collègue et famille.        </p>

        {/* Calaméo Embed Integration */}
        <div className="mt-12 max-w-6xl mx-auto text-center">
          <div className="my-2">
            <a 
              href="https://www.calameo.com/books/007887638a76298bca9cd?authid=BnuMmf5tfguS" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-mywai hover:underline"
            >
              May (2)
            </a>
          </div>
          {/* Responsive iframe wrapper */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video bg-gray-100">
            <iframe 
              src="//v.calameo.com/?bkcode=007887638a76298bca9cd&authid=BnuMmf5tfguS&mode=viewer&bgColor=F3F4F6" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency 
              allowFullScreen 
              className="absolute inset-0 w-full h-full" // Make iframe fill the responsive wrapper
              title="Extrait de livre MyWai sur Calaméo"
            ></iframe>
          </div>
          {/* Note: For a fully responsive Calaméo embed, you might need to use Calaméo's responsive embed options 
              or wrap the iframe in a div with padding-bottom trick for aspect ratio, 
              and set iframe width and height to 100% and position absolute. 
              The current fixed width/height might not be ideal for all screen sizes. */}
        </div>
        
        {/* Commented out previous book preview structure */}
        {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12 max-w-5xl mx-auto"> */}
          {/* Progress Indicator */}
          {/* <div className="bg-gradient-to-r from-mywai-light to-mywai p-4"> ... </div> */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
            {/* Book Preview */}
            {/* <div className={`${chapters[activeTab].image} p-8 min-h-[400px] flex items-center justify-center`}> ... </div> */}
            {/* Chapter Selection */}
            {/* <div className="p-6"> ... </div> */}
          {/* </div> */}
        {/* </div> */}

        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="md"
            endIcon={<ArrowRight className="h-4 w-4" />}
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="!bg-mywai hover:!bg-mywai-dark !text-white shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Créer une biographie
          </Button>
        </div>

        {/* Success Alert - Commented out */}
        {/* {showSuccessAlert && (
          <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
            <Alert
              variant="success"
              title="Téléchargement initié"
              message="L'aperçu du chapitre sera bientôt disponible dans vos téléchargements."
              showLink={true}
              linkText="Voir mes téléchargements"
              linkHref="#downloads"
              onClose={() => setShowSuccessAlert(false)} // Add onClose handler
            />
          </div>
        )} */}

      </div>
    </section>
  );
};

export default BookDemo;
