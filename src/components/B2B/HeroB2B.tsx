import { ArrowRight } from 'lucide-react';
import Button from '../ui/button/Button';
import { useTranslation, Trans } from 'react-i18next';
import { getAssetPath } from '../../lib/utils';

const HeroB2B = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24" id="about-b2b">
      <div className="absolute -top-10 right-0 w-64 h-64 bg-mywai/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-mywai-light/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <Trans i18nKey="b2b.hero.title" components={{ strong: <span className="text-mywai" /> }} />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('b2b.hero.paragraph') }} />
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
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
                {t('b2b.hero.cta_quote')}
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => window.location.href = '/'}
                className="!border-2 !border-mywai !text-mywai hover:!bg-mywai/10"
              >
                {t('b2b.hero.cta_consumer')}
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-xl shadow-xl p-6 transform rotate-3 max-w-md mx-auto">
                <div className="relative w-full aspect-[5/5] bg-gradient-to-br from-mywai-light to-mywai rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={getAssetPath("mywai-btob.png")} 
                    alt="Livre d'entreprise" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-mywai-light/20 to-mywai/20 rounded-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-mywai/20 rounded-full w-3/4"></div>
                  <div className="h-4 bg-mywai/10 rounded-full"></div>
                  <div className="h-4 bg-mywai/10 rounded-full w-5/6"></div>
                </div>
              </div>
              <div className="absolute top-1/4 -left-14 bg-white rounded-lg shadow-lg p-3 transform -rotate-6">
                <div className="h-24 w-28 rounded-md bg-mywai/20 flex items-center justify-center">
                  <img src={getAssetPath("premier-offert.png")} alt="Livre entreprise" className="w-full h-full object-cover rounded-md" />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-lg p-3 transform rotate-12">
                <div className="h-20 w-32 rounded-md bg-mywai/10 flex items-center justify-center">
                  <img src={getAssetPath("envoyer_selfie.png")} alt="Illustration" className="w-full h-full object-cover rounded-md" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-mywai-light/40 to-transparent blur-2xl"></div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-mywai/10 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-mywai">
                <path d="M20,4 L20,20 L4,20 L4,4 L20,4 Z M18,8 L6,8 L6,18 L18,18 L18,8 Z M10,10 L14,10 L14,12 L10,12 L10,10 Z M8,14 L16,14 L16,16 L8,16 L8,14 Z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold mb-2">{t('b2b.hero.features.0.title')}</h3>
            <p className="text-muted-foreground">{t('b2b.hero.features.0.description')}</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-mywai/10 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-mywai">
                <path d="M12,2 L12,22 M17,4 L17,20 M7,4 L7,20 M3,8 L21,8 M3,16 L21,16" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold mb-2">{t('b2b.hero.features.1.title')}</h3>
            <p className="text-muted-foreground">{t('b2b.hero.features.1.description')}</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-mywai/10 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-mywai">
                <path d="M4,4 L20,4 L20,20 L4,20 L4,4 Z M8,2 L8,6 M16,2 L16,6 M4,9 L20,9" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold mb-2">{t('b2b.hero.features.2.title')}</h3>
            <p className="text-muted-foreground">{t('b2b.hero.features.2.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroB2B;
