
import React, { useState } from 'react';
import { ArrowRight, BookOpen, Heart, Users, Briefcase, Home, Star, Eye, Download } from 'lucide-react';
import Button from './ui/button/Button';
import Badge from './ui/badge/Badge';
import { Modal } from './ui/modal/index';
import Alert from './ui/alert/Alert';

const BookDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  
  const chapters = [
    {
      title: "L'enfance",
      content: "Les premières années sont souvent les plus formatrices. Ce chapitre explore les souvenirs d'enfance, les moments qui ont façonné la personnalité et les premières passions qui se sont développées.",
      image: "bg-gradient-to-br from-mywai-light to-mywai",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Les amitiés",
      content: "Les relations qui ont marqué une vie entière, des amitiés d'école aux rencontres qui ont changé le cours d'une existence. Des témoignages sincères de ceux qui ont partagé les bons et les mauvais moments.",
      image: "bg-gradient-to-br from-mywai/40 to-mywai",
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: "Les passions",
      content: "Qu'il s'agisse d'art, de sport, de voyages ou de cuisine, ce chapitre célèbre les passions qui animent la personne et la rendent unique aux yeux de ses proches.",
      image: "bg-gradient-to-br from-mywai/60 to-mywai-dark",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "La vie professionnelle",
      content: "Les réussites, les défis et les apprentissages tirés du parcours professionnel, racontés par des collègues, mentors et partenaires qui ont accompagné ce cheminement.",
      image: "bg-gradient-to-br from-mywai-light/80 to-mywai-dark",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: "La vie de famille",
      content: "Les moments précieux passés en famille, les traditions, les vacances mémorables et les liens indéfectibles qui unissent parents et enfants, frères et sœurs.",
      image: "bg-gradient-to-br from-mywai/30 to-mywai-dark/90",
      icon: <Home className="h-5 w-5" />
    },
    {
      title: "Les valeurs",
      content: "Les principes, les convictions et la sagesse que la personne a partagés avec son entourage et qui continueront d'inspirer les générations futures.",
      image: "bg-gradient-to-br from-mywai-light/70 to-mywai-dark",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <section className="section-padding bg-cream relative" id="demo">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-mywai/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-mywai-light/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">Découvrez le livre</h2>
        <p className="section-subtitle">
          Une structure en six chapitres thématiques qui retrace une vie à travers les souvenirs et témoignages
        </p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12 max-w-5xl mx-auto">
          {/* Progress Indicator */}
          <div className="bg-gradient-to-r from-mywai-light to-mywai p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Chapitre {activeTab + 1} sur {chapters.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {chapters.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-6 rounded-full transition-all duration-300 ${
                        index <= activeTab ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <Badge variant="solid" color="light" size="sm">
                  {Math.round(((activeTab + 1) / chapters.length) * 100)}%
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Book Preview */}
            <div className={`${chapters[activeTab].image} p-8 min-h-[400px] flex items-center justify-center`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm transform -rotate-3">
                <h3 className="text-2xl font-display font-bold mb-4 text-mywai-dark">
                  Chapitre {activeTab + 1}: {chapters[activeTab].title}
                </h3>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg italic text-sm text-gray-600">
                  "Un témoignage sincère qui capture l'essence de cette période..."
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-8 w-8 rounded-full bg-mywai"></div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      startIcon={<Eye className="h-4 w-4" />}
                      onClick={() => setIsModalOpen(true)}
                      className="!text-mywai hover:!bg-mywai/10"
                    >
                      Aperçu
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      startIcon={<Download className="h-4 w-4" />}
                      onClick={() => setShowSuccessAlert(true)}
                      className="!bg-mywai hover:!bg-mywai-dark"
                    >
                      Télécharger
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter Selection */}
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold mb-6">Les chapitres</h3>

              <div className="space-y-4">
                {chapters.map((chapter, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    variant={activeTab === index ? "primary" : "outline"}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                      activeTab === index 
                        ? "!bg-mywai/10 border-l-4 !border-mywai !text-mywai-dark shadow-lg" 
                        : "!bg-gray-50 hover:!bg-mywai/5 hover:shadow-md"
                    }`}
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium flex items-center">
                          <Badge 
                            variant="solid" 
                            color="primary" 
                            size="sm"
                          >
                            {index + 1}
                          </Badge>
                          <span className="ml-3 flex items-center gap-2">
                            {chapter.icon}
                            {chapter.title}
                          </span>
                        </h4>
                        {activeTab === index && (
                          <Badge variant="light" color="success" size="sm">
                            Actif
                          </Badge>
                        )}
                      </div>
                      {activeTab === index && (
                        <div className="mt-3 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-muted-foreground text-sm text-left leading-relaxed">
                            {chapter.content}
                          </p>
                        </div>
                      )}
                    </div>
                  </Button>
                ))}
              </div>

              {/* Statistics Section */}
              {/* <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Aperçu du contenu</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-mywai/5 rounded-lg">
                    <div className="text-2xl font-bold text-mywai-dark">12+</div>
                    <div className="text-xs text-gray-600">Témoignages</div>
                  </div>
                  <div className="text-center p-3 bg-mywai/5 rounded-lg">
                    <div className="text-2xl font-bold text-mywai-dark">50+</div>
                    <div className="text-xs text-gray-600">Photos</div>
                  </div>
                  <div className="text-center p-3 bg-mywai/5 rounded-lg">
                    <div className="text-2xl font-bold text-mywai-dark">8</div>
                    <div className="text-xs text-gray-600">Sections</div>
                  </div>
                  <div className="text-center p-3 bg-mywai/5 rounded-lg">
                    <div className="text-2xl font-bold text-mywai-dark">120</div>
                    <div className="text-xs text-gray-600">Pages</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

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
            Voir les tarifs
          </Button>
        </div>

        {/* Success Alert */}
        {showSuccessAlert && (
          <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
            <Alert
              variant="success"
              title="Téléchargement initié"
              message="L'aperçu du chapitre sera bientôt disponible dans vos téléchargements."
              showLink={true}
              linkText="Voir mes téléchargements"
              linkHref="#downloads"
            />
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowSuccessAlert(false)}
              className="mt-2 w-full"
            >
              Fermer
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default BookDemo;
