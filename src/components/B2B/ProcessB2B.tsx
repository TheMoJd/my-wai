import Button from '../ui/button/Button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProcessB2B = () => {
  const { t } = useTranslation();
  const steps = (t('b2b.process.steps', { returnObjects: true }) as Array<{ title: string; description: string }>);

  const stepIcons = [
    <path d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z" key="p1" />, // espace
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" key="p2" />, // contributeurs
    <path d="M12 2l4 4h-3v6h-2V6H8l4-4zm-6 9h2v11H6V11zm10 0h2v11h-2V11zm-6 4h2v7h-2v-7zm4 0h2v7h-2v-7z" key="p3" />, // IA
    <path d="M3 4v16h18V4H3zm16 14H5V6h14v12zM7 8h10v2H7V8zm0 4h7v2H7v-2z" key="p4" />, // relecture
    <path d="M19 2H8c-1.1 0-2 .9-2 2v15.5c0 .83.67 1.5 1.5 1.5.39 0 .74-.15 1-.39.26.24.61.39 1 .39s.74-.15 1-.39c.26.24.61.39 1 .39s.74-.15 1-.39c.26.24.61.39 1 .39s.74-.15 1-.39c.26.24.61.39 1 .39.83 0 1.5-.67 1.5-1.5V4c0-1.1-.9-2-2-2zm0 15H8V4h11v13z" key="p5" />, // mise en page
    <path d="M19 8H5c-1.66 0-3 1.34-3 3v4h4v5h12v-5h4v-4c0-1.66-1.34-3-3-3zm-3 10H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM17 2H7v4h10V2z" key="p6" /> // impression
  ];
  const stepNumbers = ['1', '2', '3', '4', '5', '6'];

  return (
    <section className="section-padding bg-white relative" id="process-b2b">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('b2b.process.title')}</h2>
        <p className="section-subtitle">{t('b2b.process.subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-mywai text-white flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {stepNumbers[index]}
              </div>
              <div className="mb-6 w-16 h-16 bg-mywai/5 rounded-2xl flex items-center justify-center group-hover:bg-mywai group-hover:text-white transition-colors duration-300">
                <div className="h-8 w-8 fill-current text-mywai group-hover:text-white transition-colors duration-300">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-current">{stepIcons[index]}</svg>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
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
            {t('b2b.process.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessB2B;
