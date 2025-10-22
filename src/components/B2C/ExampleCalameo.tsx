import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/button/Button";
import { Modal } from "../ui/modal";
import { getAssetPath } from "../../lib/utils";

const ExampleCalameo = () => {
  const { t } = useTranslation();
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
    <section className="section-padding bg-cream relative" id="calameo">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-mywai/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-mywai-light/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="section-title !mb-0 text-center">
            {t("calameo.title")}
          </h2>
        </div>
        <p className="section-subtitle text-center">{t("calameo.subtitle")}</p>
        {/* Aperçu du livre en 3 colonnes */}
        <div className="mt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Colonne 1 : Photo principale "Mich" */}
            <div className="flex flex-col">
              <img
                src={getAssetPath("photo1.png")}
                alt="Mich - Photo principale"
                className="w-full h-auto shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleImageClick}
              />
            </div>

            {/* Colonne 2 : Photo enfant + Photo de groupe */}
            <div className="flex flex-col gap-4 md:gap-6">
              <img
                src={getAssetPath("photo2.png")}
                alt="Partie 1 - Chapitre 1: Les Racines de Mich"
                className="w-full h-auto shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleImageClick}
              />
              <img
                src={getAssetPath("photo3.png")}
                alt="Photo de famille"
                className="w-full h-auto shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleImageClick}
              />
            </div>

            {/* Colonne 3 : Texte biographique */}
            <div className="flex flex-col">
              <img
                src={getAssetPath("photo4.png")}
                alt="Texte biographique"
                className="w-full h-auto shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleImageClick}
              />
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="md"
            endIcon={<ArrowRight className="h-4 w-4" />}
            className="!bg-mywai hover:!bg-mywai-dark !text-white shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={handleImageClick}
          >
            {t("calameo.button")}
          </Button>
        </div>
      </div>

      {/* Modal avec Calaméo feuilletable */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="max-w-5xl w-full mx-4"
        isFullscreen={false}
      >
        <div className="p-4 sm:p-6">
          <h3 className="text-2xl font-bold text-center mb-4 text-mywai">
            {t("calameo.modal_title")}
          </h3>
          <div style={{ textAlign: "center" }}>
            <iframe
              src="//v.calameo.com/?bkcode=00788763825ecd11b92c2&mode=mini&view=book&showsharemenu=false&authid=u5OZBo62jDhu"
              width="900"
              height="600"
              frameBorder={0}
              allowTransparency
              allowFullScreen
              style={{ margin: "0 auto", maxWidth: "100%", display: "block" }}
              title="Calameo Preview"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.calameo.com/books/00788763825ecd11b92c2?authid=u5OZBo62jDhu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mywai hover:underline text-sm"
            >
              {t("calameo.fullscreen")}
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ExampleCalameo;
