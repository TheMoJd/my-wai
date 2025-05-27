
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/button/Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24" id="about">
      {/* Background Elements */}
      <div className="absolute -top-10 right-0 w-64 h-64 bg-mywai/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-mywai-light/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Transformez des <span className="text-mywai">souvenirs</span> en une histoire de vie
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              MyWai transforme les témoignages de vos proches en un livre autobiographique
              cohérent et émouvant, créant un cadeau personnalisé et intemporel.
            </p>            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="md"
                endIcon={<ArrowRight className="h-4 w-4" />}
                onClick={() => {
                  const demoSection = document.getElementById('demo');
                  demoSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="!bg-mywai hover:!bg-mywai-dark !text-white"
              >
                Voir une démo
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  const processSection = document.getElementById('process');
                  processSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="!border-2 !border-mywai !text-mywai hover:!bg-mywai/10"
              >
                Comment ça marche
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-xl shadow-xl p-6 transform rotate-3 max-w-md mx-auto">
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-mywai-light to-mywai rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-6 bg-mywai/20 rounded-full w-3/4"></div>
                  <div className="h-4 bg-mywai/10 rounded-full"></div>
                  <div className="h-4 bg-mywai/10 rounded-full w-5/6"></div>
                </div>
              </div>
              
              <div className="absolute top-1/4 -left-16 bg-white rounded-lg shadow-lg p-3 transform -rotate-6">
                <div className="h-24 w-24 rounded-md bg-mywai/20 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-12 w-12 fill-mywai">
                    <path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-lg p-3 transform rotate-12">
                <div className="h-20 w-32 rounded-md bg-mywai/10 flex items-center justify-center">
                  <div className="h-3 w-20 bg-mywai/30 rounded-full mb-2"></div>
                  <div className="h-3 w-16 bg-mywai/30 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-mywai-light/40 to-transparent blur-2xl"></div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-mywai/10 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-mywai">
                <path d="M20,4 L20,20 L4,20 L4,4 L20,4 Z M18,8 L6,8 L6,18 L18,18 L18,8 Z M10,10 L14,10 L14,12 L10,12 L10,10 Z M8,14 L16,14 L16,16 L8,16 L8,14 Z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Un cadeau personnalisé</h3>
            <p className="text-muted-foreground">Offrez un livre unique qui célèbre une vie à travers les yeux de ceux qui la partagent.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-mywai/10 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-mywai">
                <path d="M12,2 L12,22 M17,4 L17,20 M7,4 L7,20 M3,8 L21,8 M3,16 L21,16" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Processus simple</h3>
            <p className="text-muted-foreground">Une création sans effort avec un processus guidé pour l'initiateur du projet et les contributeurs.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="w-16 h-16 mx-auto mb-4 bg-mywai/10 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-mywai">
                <path d="M4,4 L20,4 L20,20 L4,20 L4,4 Z M8,2 L8,6 M16,2 L16,6 M4,9 L20,9" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Préservation des souvenirs</h3>
            <p className="text-muted-foreground">Capturez et conservez des histoires précieuses qui pourraient autrement se perdre avec le temps.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
