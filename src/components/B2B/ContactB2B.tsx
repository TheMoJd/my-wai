import Button from '../ui/button/Button';
import { useState } from 'react';

const ContactB2B = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-cream" id="contact-b2b">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact / Demande de devis</h2>
        <p className="section-subtitle max-w-2xl mx-auto">Expliquez-nous votre projet : type d'événement, objectifs, nombre d'exemplaires souhaités...</p>
        <div className="max-w-3xl mx-auto mt-10 bg-white/80 backdrop-blur rounded-3xl p-8 md:p-10 ring-1 ring-mywai/15">
          {submitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-mywai">Merci !</h3>
              <p className="text-muted-foreground">Nous revenons vers vous très vite pour échanger sur votre projet.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom / Prénom</label>
                  <input required type="text" className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email professionnel</label>
                  <input required type="email" className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Société</label>
                <input type="text" className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Site internet</label>
                  <input type="url" placeholder="https://" className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input type="tel" placeholder="+33" className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea required rows={5} className="w-full border border-mywai/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mywai bg-white/60" />
              </div>
              <div className="text-center">
                <button type="submit">
                  <Button variant="primary" size="md" className="!bg-mywai hover:!bg-mywai-dark !text-white">
                    Envoyer la demande
                  </Button>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactB2B;
