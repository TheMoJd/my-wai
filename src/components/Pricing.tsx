import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Button from './ui/button/Button';
import Badge from './ui/badge/Badge';

const Pricing = () => {
  const features = [
    "Livre composé de plusieurs chapitres",
    "Pas de limite de contributeurs",
    "Édition professionnelle",
    "Mise en page soignée",
    "Livre relié de qualité",
    "Livraison offerte",
    "Espace privé pour rééditer"
  ];

  return (
    <section className="section-padding bg-white relative" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Un prix unique et transparent pour ce livre inoubliable</h2>
        <p className="section-subtitle">
          Le plus beau cadeau pour un anniversaire, un départ en retraite ou un hommage.
        </p>

        <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-br from-mywai-light/30 to-mywai/30 rounded-2xl shadow-xl p-1">
          <div className="bg-white rounded-xl p-8 md:p-12">            <div className="text-center mb-8">
              {/* Badge removed as per request */}
              <div className="mt-6 flex items-center justify-center">
                <span className="text-5xl font-display font-bold">99€</span>
                <span className="ml-2 text-muted-foreground">TTC</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4">Tout ce qui est inclus</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-mywai mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <h3 className="text-xl font-display font-bold mb-4">Comment procéder ?</h3>                <p className="text-muted-foreground mb-6">
                  Lancez votre projet dès aujourd'hui et offrez un cadeau qui restera gravé dans les mémoires.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  endIcon={<ArrowRight className="h-4 w-4" />}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full !bg-mywai hover:!bg-mywai-dark !text-white"
                >
                  Créer mon livre
                </Button>
                <p className="text-sm text-center text-muted-foreground mt-4">
                  Paiement sécurisé - Satisfaction garantie
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-medium mb-2">Besoin d'options supplémentaires ?</h4>
              <p className="text-sm text-muted-foreground">
                Contactez-nous pour des demandes spéciales comme des cadeaux d'entreprises, idée cadeau départ en retraite,  des exemplaires supplémentaires, des évolutions...
              </p>
            </div>
          </div>
        </div>

        {/* "Voir les avis clients" link removed as per request */}
      </div>
    </section>
  );
};

export default Pricing;
