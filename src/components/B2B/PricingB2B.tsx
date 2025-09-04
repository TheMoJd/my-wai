import Button from '../ui/button/Button';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PricingB2B = () => {
  const { t } = useTranslation();
  const features = t('b2b.pricing.features', { returnObjects: true }) as string[];
  const exampleChapters = t('b2b.pricing.chapters', { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-white relative" id="pricing-b2b">
      <div className="container mx-auto px-4">
  <h2 className="section-title">{t('b2b.pricing.title')}</h2>
  <p className="section-subtitle">{t('b2b.pricing.subtitle')}</p>

        <div className="relative max-w-5xl mx-auto mt-14">
          <div className="absolute -inset-x-10 -inset-y-6 bg-gradient-radial from-mywai-light/40 via-transparent to-transparent blur-2xl" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="inline-flex w-10 h-10 rounded-full bg-mywai/15 items-center justify-center text-mywai font-bold">€</span>
                {t('b2b.pricing.pricing_title')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex w-6 h-6 rounded-full bg-mywai/15 text-mywai items-center justify-center">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-snug">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur-sm p-6 ring-1 ring-mywai/20 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-wide text-mywai font-semibold mb-1">{t('b2b.pricing.from')}</p>
                  <p className="text-4xl font-display font-bold text-mywai leading-none">{t('b2b.pricing.starting_price')}</p>
                  <p className="text-xs text-muted-foreground mt-2">{t('b2b.pricing.pay_later')}</p>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    endIcon={<ArrowRight className="h-4 w-4" />}
                    onClick={() => {
                      const contact = document.getElementById('contact-b2b');
                      contact?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="!bg-mywai hover:!bg-mywai-dark !text-white w-full"
                  >
                    {t('b2b.pricing.cta_quote')}
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">{t('b2b.pricing.pay_later')}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="inline-flex w-10 h-10 rounded-full bg-mywai/15 items-center justify-center text-mywai font-bold">✧</span>
                {t('b2b.pricing.chapters_title')}
              </h3>
              <ul className="space-y-2 mb-6">
                {exampleChapters.map((c, i) => (
                  <li key={i} className="text-sm flex gap-3 items-start">
                    <span className="text-mywai font-semibold tabular-nums w-5">{(i+1).toString().padStart(2,'0')}</span>
                    <span className="flex-1 leading-snug">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">{t('b2b.pricing.chapters_disclaimer')}</p>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const contact = document.getElementById('contact-b2b');
                  contact?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full !border-mywai !text-mywai hover:!bg-mywai/10"
              >
                {t('b2b.pricing.cta_discuss')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingB2B;
