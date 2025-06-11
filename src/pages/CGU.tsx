import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';

const CGU = () => {
  const currentDate = new Date().toLocaleDateString('fr-FR');

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cream pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-mywai-dark">
                📄 Conditions Générales d'Utilisation – MyWai
              </h1>
              
              <p className="text-lg font-medium mb-8">
                <strong>Dernière mise à jour : {currentDate}</strong>
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">1. Objet</h2>
                <p className="mb-4">
                  Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités d'utilisation du service MyWai, accessible via le site{' '}
                  <a href="https://mywai.com" className="text-mywai hover:underline">https://my-w.ai</a>, et de préciser les droits et obligations des utilisateurs et de l'éditeur.
                </p>
                <p>
                  MyWai est un service en ligne permettant de créer une biographie personnalisée à partir des contributions de proches, générée avec l'aide d'une intelligence artificielle, et pouvant être imprimée sous forme de livre.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">2. Acceptation des conditions</h2>
                <p>
                  L'utilisation du service implique l'acceptation pleine et entière des présentes CGU. En accédant à la plateforme, en créant un projet ou en contribuant à un livre, vous reconnaissez avoir lu, compris et accepté ces conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">3. Accès au service</h2>
                <p className="mb-4">
                  L'accès à la plateforme est ouvert à tout utilisateur disposant d'un accès à Internet. Certaines fonctionnalités sont soumises à la création d'un compte ou au paiement d'un projet (achat direct ou cagnotte).
                </p>
                <p>
                  MyWai se réserve le droit de suspendre temporairement ou définitivement l'accès à ses services, sans préavis, notamment pour maintenance ou mise à jour.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">4. Création de contenu</h2>
                <p className="mb-4">Les utilisateurs peuvent :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Créer un espace projet pour une personne à célébrer,</li>
                  <li>Inviter des proches à contribuer via des messages, anecdotes, photos, fichiers audio,</li>
                  <li>Modifier, relire et valider le contenu avant impression.</li>
                </ul>
                <p>
                  Le contenu généré par l'IA s'appuie exclusivement sur les éléments fournis. L'utilisateur final reste responsable de la vérification et de la validation des textes avant impression.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">5. Propriété intellectuelle</h2>
                <p className="mb-4">
                  L'ensemble des textes générés dans le cadre d'un projet MyWai est la propriété de l'utilisateur final une fois le paiement effectué.
                </p>
                <p className="mb-4">
                  MyWai ne revendique aucun droit de diffusion ou d'exploitation commerciale sur les contenus finalisés, sauf accord explicite.
                </p>
                <p>
                  L'utilisateur garantit disposer des droits nécessaires sur les contenus (textes, images, témoignages) qu'il téléverse ou invite à partager.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">6. Protection des données personnelles</h2>
                <p className="mb-4">MyWai s'engage à respecter la confidentialité des données collectées :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Les contributions sont privées, non indexées, et accessibles uniquement aux personnes invitées,</li>
                  <li>Aucune donnée n'est cédée à des tiers,</li>
                  <li>L'utilisateur peut à tout moment demander la suppression de ses données via{' '}
                    <a href="mailto:contact@mywai.com" className="text-mywai hover:underline">contact@mywai.com</a>.
                  </li>
                </ul>
                <p>
                  Les données sont stockées de manière sécurisée sur des serveurs hébergés en Europe, conformément au RGPD.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">7. Tarification</h2>
                <p className="mb-4">
                  Les tarifs des services (livre imprimé, options supplémentaires, versions numériques, etc.) sont indiqués sur le site. MyWai se réserve le droit de modifier ses prix à tout moment.
                </p>
                <p>
                  Les projets financés par cagnotte sont débloqués uniquement si le montant total est atteint. En cas d'échec, les contributeurs peuvent être remboursés ou invités à compléter le montant.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">8. Droit de rétractation</h2>
                <p>
                  Pour tout achat de livre imprimé, l'utilisateur dispose d'un délai légal de rétractation tant que le contenu n'a pas été validé pour impression. Une fois la validation confirmée, le livre entre en production et ne peut être annulé ni remboursé, sauf défaut manifeste.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">9. Responsabilité</h2>
                <p className="mb-4">MyWai ne saurait être tenu responsable :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Des propos partagés par les contributeurs,</li>
                  <li>Des erreurs ou omissions dans le contenu validé par l'utilisateur,</li>
                  <li>Des retards liés aux prestataires d'impression ou livraison.</li>
                </ul>
                <p>
                  L'utilisateur s'engage à utiliser le service de manière respectueuse, sans propos haineux, diffamatoires ou discriminants.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">10. Modification des CGU</h2>
                <p>
                  Les présentes conditions peuvent être modifiées à tout moment. Les utilisateurs seront informés des modifications importantes. L'utilisation continue du service après modification vaut acceptation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">11. Droit applicable</h2>
                <p>
                  Les présentes conditions sont régies par le droit français. En cas de litige, compétence est attribuée aux tribunaux français compétents.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-mywai-dark">12. Contact</h2>
                <p>
                  Pour toute question concernant ces conditions ou l'utilisation de MyWai :
                </p>
                <p className="mt-4">
                  📧 <strong><a href="mailto:contact@my-w.ai" className="text-mywai hover:underline">contact@my-w.ai</a></strong>
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

export default CGU;
