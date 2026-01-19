import Button from '../ui/button/Button';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PricingB2B = () => {
  const { t } = useTranslation();
  const features = t('b2b.pricing.features', { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-white relative" id="pricing-b2b">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('b2b.pricing.title')}</h2>
        <p className="section-subtitle">{t('b2b.pricing.subtitle')}</p>

        <div className="relative max-w-3xl mx-auto mt-14">
          <div className="absolute -inset-x-10 -inset-y-6 bg-gradient-radial from-mywai-light/40 via-transparent to-transparent blur-2xl" aria-hidden="true" />
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl ring-1 ring-mywai/10">
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <span className="inline-flex w-12 h-12 rounded-full bg-mywai/15 items-center justify-center text-mywai font-bold text-xl">€</span>
                {t('b2b.pricing.pricing_title')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-6 h-6 rounded-full bg-mywai/15 text-mywai items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base leading-snug">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-2xl bg-mywai/5 p-8 flex flex-col sm:flex-row sm:items-center gap-8 border border-mywai/10">
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-wide text-mywai font-semibold mb-2">{t('b2b.pricing.from')}</p>
                  <p className="text-5xl font-display font-bold text-mywai leading-none">{t('b2b.pricing.starting_price')}</p>
                  <p className="text-sm text-muted-foreground mt-3">{t('b2b.pricing.pay_later')}</p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    endIcon={<ArrowRight className="h-4 w-4" />}
                    onClick={() => {
                      const contact = document.getElementById('contact-b2b');
                      contact?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="!bg-mywai hover:!bg-mywai-dark !text-white w-full h-14 text-lg"
                  >
                    {t('b2b.pricing.cta_quote')}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">Estimation personnalisée gratuite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingB2B;
