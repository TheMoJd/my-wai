import Button from '../ui/button/Button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Avatar from '../ui/avatar/Avatar';
import { getAssetPath } from '../../lib/utils';

const TestimonialsB2B = () => {
  const { t } = useTranslation();
  const testimonials = t('b2b.testimonials.items', { returnObjects: true }) as Array<{ content: string; author: string; role: string }>;

  // Mapping des photos pour chaque auteur B2B
  const getAuthorPhoto = (author: string) => {
    const photoMap: { [key: string]: string } = {
      "Nathalie D.": "2. Sophie Dubois.png",
      "Pierre M.": "2. Thomas Bernard.png",
      "Julien T.": "2. Elodie Martin.png",
    };
    
    return photoMap[author] || null;
  };

  return (
    <section className="section-padding bg-cream relative" id="testimonials-b2b">
      <div className="container mx-auto px-4 relative z-10">
  <h2 className="section-title">{t('b2b.testimonials.title')}</h2>
  <p className="section-subtitle">{t('b2b.testimonials.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col card-hover">
              <div className="mb-4 text-mywai">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.93333 12.3333 6.13333 10.7333C7.33333 9.13333 9.06667 7.86667 11.3333 6.93333L12.6667 8.8C11.0667 9.46667 9.8 10.2667 8.86667 11.2C7.93333 12.1333 7.46667 13.0667 7.46667 14C7.46667 14.2667 7.53333 14.5333 7.66667 14.8C7.8 15.0667 8 15.2 8.26667 15.2C8.6 15.2 9.13333 15.0667 9.86667 14.8C10.6 14.5333 11.2667 14.4 11.8667 14.4C13 14.4 14 14.8 14.8667 15.6C15.7333 16.4 16.1333 17.3333 16.1333 18.5333C16.1333 19.7333 15.6667 20.6667 14.7333 21.6C13.8 20.7333 12.6667 21.3333 11.3333 21.3333ZM20.6667 21.3333C19.2 21.3333 18 20.8 17.0667 19.7333C16.1333 18.6667 15.6667 17.3333 15.6667 15.7333C15.6667 14 16.2667 12.3333 17.4667 10.7333C18.6667 9.13333 20.4 7.86667 22.6667 6.93333L24 8.8C22.4 9.46667 21.1333 10.2667 20.2 11.2C19.2667 12.1333 18.8 13.0667 18.8 14C18.8 14.2667 18.8667 14.5333 19 14.8C19.1333 15.0667 19.3333 15.2 19.6 15.2C19.9333 15.2 20.4667 15.0667 21.2 14.8C21.9333 14.5333 22.6 14.4 23.2 14.4C24.3333 14.4 25.3333 14.8 26.2 15.6C27.0667 16.4 27.4667 17.3333 27.4667 18.5333C27.4667 19.7333 27 20.6667 26.0667 21.6C25.1333 20.7333 24 21.3333 22.6667 21.3333Z" />
                </svg>
              </div>
        <p className="text-gray-700 italic flex-grow">{item.content}</p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={getAuthorPhoto(item.author) 
                      ? getAssetPath(getAuthorPhoto(item.author)!)
                      : `https://api.dicebear.com/7.x/initials/svg?seed=${item.author}`
                    }
                    alt={item.author}
                    size="small"
                  />
                  <div>
                    <h4 className="font-medium">{item.author}</h4>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{t('b2b.testimonials.verified')}</span>
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
            {t('b2b.testimonials.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsB2B;
