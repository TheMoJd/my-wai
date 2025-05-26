
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BookDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const chapters = [
    {
      title: "L'enfance",
      content: "Les premières années sont souvent les plus formatrices. Ce chapitre explore les souvenirs d'enfance, les moments qui ont façonné la personnalité et les premières passions qui se sont développées.",
      image: "bg-gradient-to-br from-mywai-light to-mywai"
    },
    {
      title: "Les amitiés",
      content: "Les relations qui ont marqué une vie entière, des amitiés d'école aux rencontres qui ont changé le cours d'une existence. Des témoignages sincères de ceux qui ont partagé les bons et les mauvais moments.",
      image: "bg-gradient-to-br from-mywai/40 to-mywai"
    },
    {
      title: "Les passions",
      content: "Qu'il s'agisse d'art, de sport, de voyages ou de cuisine, ce chapitre célèbre les passions qui animent la personne et la rendent unique aux yeux de ses proches.",
      image: "bg-gradient-to-br from-mywai/60 to-mywai-dark"
    },
    {
      title: "La vie professionnelle",
      content: "Les réussites, les défis et les apprentissages tirés du parcours professionnel, racontés par des collègues, mentors et partenaires qui ont accompagné ce cheminement.",
      image: "bg-gradient-to-br from-mywai-light/80 to-mywai-dark"
    },
    {
      title: "La vie de famille",
      content: "Les moments précieux passés en famille, les traditions, les vacances mémorables et les liens indéfectibles qui unissent parents et enfants, frères et sœurs.",
      image: "bg-gradient-to-br from-mywai/30 to-mywai-dark/90"
    },
    {
      title: "Les valeurs",
      content: "Les principes, les convictions et la sagesse que la personne a partagés avec son entourage et qui continueront d'inspirer les générations futures.",
      image: "bg-gradient-to-br from-mywai-light/70 to-mywai-dark"
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
                <div className="mt-4 flex justify-end">
                  <div className="h-8 w-8 rounded-full bg-mywai"></div>
                </div>
              </div>
            </div>

            {/* Chapter Selection */}
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold mb-6">Les chapitres</h3>

              <div className="space-y-4">
                {chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeTab === index 
                        ? "bg-mywai/10 border-l-4 border-mywai" 
                        : "bg-gray-50 hover:bg-mywai/5"
                    }`}
                  >
                    <h4 className="text-lg font-medium flex items-center">
                      <span className="w-6 h-6 rounded-full bg-mywai/20 text-mywai-dark text-sm flex items-center justify-center mr-3">
                        {index + 1}
                      </span>
                      {chapter.title}
                    </h4>
                    {activeTab === index && (
                      <p className="mt-2 text-muted-foreground text-sm">
                        {chapter.content}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#pricing" className="btn-demo inline-flex items-center gap-2">
            <span>Voir les tarifs</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
