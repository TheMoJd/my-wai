import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';

const MentionsLegales = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cream pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-mywai-dark">
                {t('mentions_legales.title')}
              </h1>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('mentions_legales.sections.editor.title')}</h2>
                <p className="mb-4">
                  {t('mentions_legales.sections.editor.content')}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p><strong>{t('mentions_legales.sections.editor.company_name')}</strong></p>
                  <p><strong>{t('mentions_legales.sections.editor.siret')}</strong></p>
                  <p><strong>{t('mentions_legales.sections.editor.address')}</strong></p>
                  <p>📧 <strong>{t('mentions_legales.sections.editor.contact')}</strong></p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('mentions_legales.sections.director.title')}</h2>
                <p>
                  {t('mentions_legales.sections.director.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('mentions_legales.sections.hosting.title')}</h2>
                <p className="mb-4">{t('mentions_legales.sections.hosting.content')}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p><strong>{t('mentions_legales.sections.hosting.host_name')}</strong></p>
                  <p>{t('mentions_legales.sections.hosting.host_address')}</p>
                  <p>📧 <strong>{t('mentions_legales.sections.hosting.host_support')}</strong></p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('mentions_legales.sections.intellectual_property.title')}</h2>
                <p className="mb-4">
                  {t('mentions_legales.sections.intellectual_property.content_1')}
                </p>
                <p>
                  {t('mentions_legales.sections.intellectual_property.content_2')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('mentions_legales.sections.personal_data.title')}</h2>
                <p className="mb-4">
                  {t('mentions_legales.sections.personal_data.content_1')}
                </p>
                <p className="mb-4">
                  {t('mentions_legales.sections.personal_data.content_2')}
                </p>
                <p>
                  {t('mentions_legales.sections.personal_data.content_3')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">{t('mentions_legales.sections.cookies.title')}</h2>
                <p>
                  {t('mentions_legales.sections.cookies.content')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentionsLegales;