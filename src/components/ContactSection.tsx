
import React from 'react';
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-white relative" id="contact">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mywai-light/30 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-0 w-80 h-80 bg-mywai/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">Commencez votre projet</h2>
        <p className="section-subtitle">
          Prêt à créer un livre qui touchera le cœur de quelqu'un ? Contactez-nous dès aujourd'hui
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="text-xl font-display font-bold mb-4">Besoin d'aide ?</h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions et vous guider dans votre projet.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-mywai mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">contact@mywai.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-mywai mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-muted-foreground">01 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-mywai mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Chat en direct</h4>
                    <p className="text-muted-foreground">Lun-Ven, 9h-18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-mywai p-6 rounded-xl text-white">
              <h3 className="text-xl font-display font-bold mb-4">Démarrer un projet</h3>
              <p className="mb-6 text-white/90">
                Créez votre livre en quelques clics et commencez à collecter les témoignages dès aujourd'hui.
              </p>
              <a 
                href="#" 
                className="bg-white text-mywai-dark font-medium py-3 px-6 rounded-full inline-flex items-center gap-2 shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <span>Commencer maintenant</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-cream rounded-xl p-6 md:p-8 shadow-md">
            <h3 className="text-xl font-display font-bold mb-6">Contactez-nous</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mywai focus:border-mywai outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mywai focus:border-mywai outline-none transition-colors" 
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mywai focus:border-mywai outline-none transition-colors" 
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mywai focus:border-mywai outline-none transition-colors" 
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-demo w-full justify-center"
              >
                Envoyer le message
              </button>
            </form>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
