import Button from '../ui/button/Button';
import { ArrowRight } from 'lucide-react';

const TestimonialsB2B = () => {
  const testimonials = [
    {
      content: '« Nous cherchions une idée originale pour marquer les départs en retraite de nos collaborateurs. Avec MyWai, nous avons trouvé un format à la fois simple et profondément humain. Le livre remis à chaque départ dépasse largement le cadeau classique : c’est un récit de vie, nourri par ses collègues et magnifié par l’IA. Les émotions étaient au rendez-vous, et nos collaborateurs ont senti toute la reconnaissance de l’entreprise. »',
      author: 'Nathalie D.',
      role: 'Responsable RH, Groupe agroalimentaire'
    },
    {
      content: '« Nous avons utilisé MyWai pour raconter les 50 ans de notre société. Les anciens, les salariés actuels et même quelques clients ont contribué. Résultat : un ouvrage magnifique, qui retrace notre culture et nos valeurs de manière vivante. C’est devenu un outil précieux pour notre communication interne et pour l’onboarding des nouvelles recrues. »',
      author: 'Pierre M.',
      role: 'Directeur Communication'
    },
    {
      content: '« Le jour de son pot de départ, on lui a remis le livre devant toute l\'équipe. Il l\'a feuilleté, a reconnu les messages, les anecdotes… et il s\'est arrêté net. Il avait les larmes aux yeux. C\'est le genre de cadeau qu\'on n\'oublie pas. Même les collègues les plus sceptiques ont été bluffés par la qualité et la sensibilité du résultat. »',
      author: 'Julien T.',
      role: 'Chef de projet'
    }
  ];

  return (
    <section className="section-padding bg-cream relative" id="testimonials-b2b">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Ce qu'en disent les entreprises</h2>
        <p className="section-subtitle">Découvrez les témoignages de ceux qui ont offert un livre biographique MyWai</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col card-hover">
              <div className="mb-4 text-mywai">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.93333 12.3333 6.13333 10.7333C7.33333 9.13333 9.06667 7.86667 11.3333 6.93333L12.6667 8.8C11.0667 9.46667 9.8 10.2667 8.86667 11.2C7.93333 12.1333 7.46667 13.0667 7.46667 14C7.46667 14.2667 7.53333 14.5333 7.66667 14.8C7.8 15.0667 8 15.2 8.26667 15.2C8.6 15.2 9.13333 15.0667 9.86667 14.8C10.6 14.5333 11.2667 14.4 11.8667 14.4C13 14.4 14 14.8 14.8667 15.6C15.7333 16.4 16.1333 17.3333 16.1333 18.5333C16.1333 19.7333 15.6667 20.6667 14.7333 21.6C13.8 20.7333 12.6667 21.3333 11.3333 21.3333ZM20.6667 21.3333C19.2 21.3333 18 20.8 17.0667 19.7333C16.1333 18.6667 15.6667 17.3333 15.6667 15.7333C15.6667 14 16.2667 12.3333 17.4667 10.7333C18.6667 9.13333 20.4 7.86667 22.6667 6.93333L24 8.8C22.4 9.46667 21.1333 10.2667 20.2 11.2C19.2667 12.1333 18.8 13.0667 18.8 14C18.8 14.2667 18.8667 14.5333 19 14.8C19.1333 15.0667 19.3333 15.2 19.6 15.2C19.9333 15.2 20.4667 15.0667 21.2 14.8C21.9333 14.5333 22.6 14.4 23.2 14.4C24.3333 14.4 25.3333 14.8 26.2 15.6C27.0667 16.4 27.4667 17.3333 27.4667 18.5333C27.4667 19.7333 27 20.6667 26.0667 21.6C25.1333 20.7333 24 21.3333 22.6667 21.3333Z" />
                </svg>
              </div>
              <p className="text-gray-700 italic flex-grow">{t.content}</p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Vérifié</span>
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
              const contact = document.getElementById('contact-b2b');
              contact?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="!bg-mywai hover:!bg-mywai-dark !text-white"
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsB2B;
