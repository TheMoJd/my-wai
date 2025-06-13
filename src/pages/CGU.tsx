import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';

const CGU = () => {
  const { t } = useTranslation();
  const currentDate = new Date().toLocaleDateString('fr-FR');

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cream pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-mywai-dark">
                {t('cgu.title')}
              </h1>
              
              <p className="text-lg font-medium mb-8">
                <strong>{t('cgu.last_updated')} {currentDate}</strong>
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.introduction.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.introduction.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.service_description.title')}</h2>
                <p>
                  {t('cgu.sections.service_description.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.user_obligations.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.user_obligations.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.content_creation.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.content_creation.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.intellectual_property.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.intellectual_property.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.data_privacy.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.data_privacy.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.payment_delivery.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.payment_delivery.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.cancellation.title')}</h2>
                <p>
                  {t('cgu.sections.cancellation.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.liability.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.liability.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.modifications.title')}</h2>
                <p>
                  {t('cgu.sections.modifications.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.applicable_law.title')}</h2>
                <p>
                  {t('cgu.sections.applicable_law.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('cgu.sections.contact.title')}</h2>
                <div className="mb-4">
                  {t('cgu.sections.contact.content').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CGU;
