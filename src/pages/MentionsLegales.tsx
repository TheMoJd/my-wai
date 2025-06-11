import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';

const MentionsLegales = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cream pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-mywai-dark">
                📄 Mentions légales – MyWai
              </h1>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">Éditeur du site</h2>
                <p className="mb-4">
                  Le site{' '}
                  <a href="https://mywai.com" className="text-mywai hover:underline">https://www.my-w.ai</a>{' '}
                  est édité par :
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p><strong>GLAZH</strong></p>
                  <p><strong>SIRET :</strong> 497693309</p>
                  <p><strong>Siège social :</strong> 11 résidence la Chesnaie - 29290 Saint-Renan</p>
                  <p>📧 <strong>Contact :</strong> <a href="mailto:contact@mywai.com" className="text-mywai hover:underline">contact@mywai.com</a></p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">Directeur de la publication</h2>
                <p>
                  [Nom Prénom du fondateur ou CEO]
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">Hébergement</h2>
                <p className="mb-4">Ce site est hébergé par :</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p><strong>[Nom de l'hébergeur, ex. OVHcloud]</strong></p>
                  <p>[Adresse légale ou pays de l'hébergeur]</p>
                  <p>📧 <strong>support :</strong> [email si disponible]</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">Propriété intellectuelle</h2>
                <p className="mb-4">
                  Tous les contenus présents sur ce site (textes, visuels, structure, logo) sont la propriété exclusive de MyWai ou de ses contributeurs.
                </p>
                <p>
                  Toute reproduction partielle ou totale sans autorisation est interdite.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">Données personnelles</h2>
                <p className="mb-4">
                  Les informations recueillies via le site sont utilisées uniquement pour la création et la gestion des biographies.
                </p>
                <p className="mb-4">
                  Elles ne sont jamais revendues.
                </p>
                <p>
                  Vous pouvez demander leur suppression à tout moment par e-mail à :{' '}
                  <a href="mailto:contact@my-w.ai" className="text-mywai hover:underline">contact@my-w.ai</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">Cookies</h2>
                <p>
                  Le site utilise des cookies pour améliorer la navigation et mesurer l'audience. Vous pouvez les refuser dans les paramètres de votre navigateur.
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