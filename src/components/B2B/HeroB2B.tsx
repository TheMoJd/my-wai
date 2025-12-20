import { ArrowRight } from 'lucide-react';
import Button from '../ui/button/Button';
import { useTranslation, Trans } from 'react-i18next';
import { getAssetPath } from '../../lib/utils';

const HeroB2B = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24" id="about-b2b">
      <div className="absolute -top-10 right-0 w-96 h-96 bg-mywai/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-mywai-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              <Trans i18nKey="b2b.hero.title" components={{
                strong: <span className="text-mywai relative inline-block">
                  <span className="relative z-10">{t('b2b.hero.title_highlight')}</span>
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-mywai/20 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              }} />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0" dangerouslySetInnerHTML={{ __html: t('b2b.hero.paragraph') }} />
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                endIcon={<ArrowRight className="h-5 w-5" />}
                onClick={() => {
                  const contact = document.getElementById('contact-b2b');
                  contact?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="!bg-mywai hover:!bg-mywai-dark !text-white shadow-lg shadow-mywai/25 hover:shadow-xl hover:shadow-mywai/30 transition-all transform hover:-translate-y-1"
              >
                {t('b2b.hero.cta_quote')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/'}
                className="!border-2 !border-mywai !text-mywai hover:!bg-mywai/5 backdrop-blur-sm"
              >
                {t('b2b.hero.cta_consumer')}
              </Button>
            </div>
          </div>
          <div className="relative perspective-1000">
            <div className="relative z-10 animate-float duration-3000">
              <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-4 transform rotate-2 max-w-md mx-auto transition-transform hover:rotate-0 duration-500">
                <div className="relative w-full aspect-[5/5] bg-gradient-to-br from-mywai-light to-mywai rounded-xl mb-4 overflow-hidden shadow-inner">
                  <img
                    src={getAssetPath("mywai-btob.png")}
                    alt="Livre d'entreprise"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-mywai-light/20 to-mywai/20 rounded-lg"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-subtle">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Impact</p>
                    <p className="text-sm font-bold text-gray-900">Marque Employeur</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-mywai-light/30 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-mywai/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-mywai/10 rounded-xl flex items-center justify-center group-hover:bg-mywai group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-mywai group-hover:text-white transition-colors">
                  <path d="M20,4 L20,20 L4,20 L4,4 L20,4 Z M18,8 L6,8 L6,18 L18,18 L18,8 Z M10,10 L14,10 L14,12 L10,12 L10,10 Z M8,14 L16,14 L16,16 L8,16 L8,14 Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-1 text-foreground">{t('b2b.hero.features.0.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('b2b.hero.features.0.description')}</p>
              </div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-mywai/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-mywai/10 rounded-xl flex items-center justify-center group-hover:bg-mywai group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-mywai group-hover:text-white transition-colors">
                  <path d="M12,2 L12,22 M17,4 L17,20 M7,4 L7,20 M3,8 L21,8 M3,16 L21,16" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-1 text-foreground">{t('b2b.hero.features.1.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('b2b.hero.features.1.description')}</p>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="group bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-mywai/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-mywai/10 rounded-xl flex items-center justify-center group-hover:bg-mywai group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-mywai group-hover:text-white transition-colors">
                  <path d="M4,4 L20,4 L20,20 L4,20 L4,4 Z M8,2 L8,6 M16,2 L16,6 M4,9 L20,9" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-1 text-foreground">{t('b2b.hero.features.2.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('b2b.hero.features.2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroB2B;
