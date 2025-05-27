
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/button/Button';
import Avatar from './ui/avatar/Avatar';
import Badge from './ui/badge/Badge';

const Testimonials = () => {
  const testimonials = [
    {
      content: "J'ai offert ce livre à ma mère pour ses 70 ans. Elle a versé des larmes de joie en lisant tous les témoignages de ses amis et de sa famille. C'est un cadeau qui l'accompagnera toute sa vie.",
      author: "Marie L.",
      role: "Pour l'anniversaire de sa mère"
    },
    {
      content: "Le processus est incroyablement simple. L'équipe de MyWai a fait tout le travail difficile, de la coordination des contributions à l'édition. Le résultat est magnifiquement mis en page et très professionnel.",
      author: "Thomas B.",
      role: "Pour la retraite de son père"
    },
    {
      content: "J'hésitais à cause du prix, mais la qualité du livre et les émotions qu'il a suscitées valent chaque centime. Un cadeau vraiment unique que l'argent ne peut normalement pas acheter.",
      author: "Sophie D.",
      role: "Pour l'anniversaire de mariage de ses parents"
    },
    {
      content: "Nous avons créé ce livre pour notre professeur qui prenait sa retraite après 30 ans d'enseignement. Voir tous les anciens élèves contribuer avec leurs souvenirs était incroyable, et il était profondément touché.",
      author: "Lucas M.",
      role: "Pour un professeur"
    },
    {
      content: "Le service client est exceptionnel. Ils ont répondu à toutes mes questions et ont même aidé certains contributeurs moins à l'aise avec la technologie. Un grand merci pour votre patience !",
      author: "Claire V.",
      role: "Pour sa grand-mère"
    },
    {
      content: "La qualité d'impression et la reliure sont impeccables. Ce n'est pas un simple album photo, c'est un véritable livre que l'on est fier d'offrir et de montrer.",
      author: "Antoine R.",
      role: "Pour son mentor"
    }
  ];

  return (
    <section className="section-padding bg-cream relative" id="testimonials">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkE1NUEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDEtMyAzLTNzMyAxIDMgMy0xIDMtMyAzLTMtMS0zLTN6bTAtMTBjMC0yIDEtMyAzLTNzMyAxIDMgMy0xIDMtMyAzLTMtMS0zLTN6bTEwIDEwYzAtMiAxLTMgMy0zczMgMSAzIDMtMSAzLTMgMy0zLTEtMy0zem0tMTAgMTBjMC0yIDEtMyAzLTNzMyAxIDMgMy0xIDMtMyAzLTMtMS0zLTN6bS0xMC0yMGMwLTIgMS0zIDMtM3MzIDEgMyAzLTEgMy0zIDMtMy0xLTMtM3ptLTEwIDEwYzAtMiAxLTMgMy0zczMgMSAzIDMtMSAzLTMgMy0zLTEtMy0zem0zMCAxMGMwLTIgMS0zIDMtM3MzIDEgMyAzLTEgMy0zIDMtMy0xLTMtM3ptLTIwIDIwYzAtMiAxLTMgMy0zczMgMSAzIDMtMSAzLTMgMy0zLTEtMy0zem0xMC0xMGMwLTIgMS0zIDMtM3MzIDEgMyAzLTEgMy0zIDMtMy0xLTMtM3ptLTEwLTEwYzAtMiAxLTMgMy0zczMgMSAzIDMtMSAzLTMgMy0zLTEtMy0zem0zMCAxMGMwLTIgMS0zIDMtM3MzIDEgMyAzLTEgMy0zIDMtMy0xLTMtM3pNMTYgMzRjMC0yIDEtMyAzLTNzMyAxIDMgMy0xIDMtMyAzLTMtMS0zLTN6bS0xMC0xMGMwLTIgMS0zIDMtM3MzIDEgMyAzLTEgMy0zIDMtMy0xLTMtM3ptMTAgMTBjMC0yIDEtMyAzLTNzMyAxIDMgMy0xIDMtMyAzLTMtMS0zLTN6TTM2IDE0YzAtMiAxLTMgMy0zczMgMSAzIDMtMSAzLTMgMy0zLTEtMy0zek0xNiAxNGMwLTIgMS0zIDMtM3MzIDEgMyAzLTEgMy0zIDMtMy0xLTMtM3ptMTAgNDBjMC0yIDEtMyAzLTNzMyAxIDMgMy0xIDMtMyAzLTMtMS0zLTN6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Ce qu'en disent nos clients</h2>
        <p className="section-subtitle">
          Découvrez les témoignages de ceux qui ont offert un livre MyWai
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col card-hover"
            >
              <div className="mb-4 text-mywai">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.93333 12.3333 6.13333 10.7333C7.33333 9.13333 9.06667 7.86667 11.3333 6.93333L12.6667 8.8C11.0667 9.46667 9.8 10.2667 8.86667 11.2C7.93333 12.1333 7.46667 13.0667 7.46667 14C7.46667 14.2667 7.53333 14.5333 7.66667 14.8C7.8 15.0667 8 15.2 8.26667 15.2C8.6 15.2 9.13333 15.0667 9.86667 14.8C10.6 14.5333 11.2667 14.4 11.8667 14.4C13 14.4 14 14.8 14.8667 15.6C15.7333 16.4 16.1333 17.3333 16.1333 18.5333C16.1333 19.7333 15.6667 20.6667 14.7333 21.6C13.8 20.7333 12.6667 21.3333 11.3333 21.3333ZM20.6667 21.3333C19.2 21.3333 18 20.8 17.0667 19.7333C16.1333 18.6667 15.6667 17.3333 15.6667 15.7333C15.6667 14 16.2667 12.3333 17.4667 10.7333C18.6667 9.13333 20.4 7.86667 22.6667 6.93333L24 8.8C22.4 9.46667 21.1333 10.2667 20.2 11.2C19.2667 12.1333 18.8 13.0667 18.8 14C18.8 14.2667 18.8667 14.5333 19 14.8C19.1333 15.0667 19.3333 15.2 19.6 15.2C19.9333 15.2 20.4667 15.0667 21.2 14.8C21.9333 14.5333 22.6 14.4 23.2 14.4C24.3333 14.4 25.3333 14.8 26.2 15.6C27.0667 16.4 27.4667 17.3333 27.4667 18.5333C27.4667 19.7333 27 20.6667 26.0667 21.6C25.1333 20.7333 24 21.3333 22.6667 21.3333Z" />
                </svg>
              </div>
              <p className="text-gray-700 italic flex-grow">{testimonial.content}</p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.author}`}
                    alt={testimonial.author}
                    size="small"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <Badge variant="light" color="success" size="sm">
                  Vérifié
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="md"
            endIcon={<ArrowRight className="h-4 w-4" />}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="!bg-mywai hover:!bg-mywai-dark !text-white"
          >
            Créer mon livre
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
