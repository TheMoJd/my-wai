import Button from '../ui/button/Button';
import { ArrowRight } from 'lucide-react';

const ProcessB2B = () => {
  const steps = [
    {
      title: "Création d'un espace pour l'entreprise (gratuit)",
      description: "Ajoutez le nom, la date de création, le site web, l'angle du livre : fondateur, marque, métiers, impact, anniversaire…"
    },
    {
      title: 'Invitation des collaborateurs à contribuer (sans limitation)',
      description: 'Collaborateurs, clients, partenaires, anciens partagent anecdotes, messages et photos via un formulaire simple.'
    },
    {
      title: "L'IA construit la biographie d'entreprise",
      description: "Grâce à l’IA et à vos contributions, nous rédigeons une biographie émouvante et structurée. Rien n’est imprimé sans votre validation."
    },
    {
      title: 'Relecture & ajustements',
      description: 'Vous relisez le manuscrit, suggérez des modifications et validez le ton final.'
    },
    {
      title: 'Mise en page & création de la couverture',
      description: 'Nous maquettions un livre élégant (format, typographies, structure) et réalisons une couverture personnalisée.'
    },
    {
      title: 'Impression & livraison',
      description: 'Votre livre d’entreprise est imprimé en France avec une qualité premium et livré selon vos besoins.'
    }
  ];

  const stepIcons = [
    <path d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z" key="p1" />, // espace
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" key="p2" />, // contributeurs
    <path d="M12 2l4 4h-3v6h-2V6H8l4-4zm-6 9h2v11H6V11zm10 0h2v11h-2V11zm-6 4h2v7h-2v-7zm4 0h2v7h-2v-7z" key="p3" />, // IA
    <path d="M3 4v16h18V4H3zm16 14H5V6h14v12zM7 8h10v2H7V8zm0 4h7v2H7v-2z" key="p4" />, // relecture
    <path d="M19 2H8c-1.1 0-2 .9-2 2v15.5c0 .83.67 1.5 1.5 1.5.39 0 .74-.15 1-.39.26.24.61.39 1 .39s.74-.15 1-.39c.26.24.61.39 1 .39s.74-.15 1-.39c.26.24.61.39 1 .39s.74-.15 1-.39c.26.24.61.39 1 .39.83 0 1.5-.67 1.5-1.5V4c0-1.1-.9-2-2-2zm0 15H8V4h11v13z" key="p5" />, // mise en page
    <path d="M19 8H5c-1.66 0-3 1.34-3 3v4h4v5h12v-5h4v-4c0-1.66-1.34-3-3-3zm-3 10H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM17 2H7v4h10V2z" key="p6" /> // impression
  ];
  const stepNumbers = ['1','2','3','4','5','6'];

  return (
    <section className="section-padding bg-white relative" id="process-b2b">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Comment ça marche pour créer un livre d'entreprise</h2>
        <p className="section-subtitle">Un processus guidé en 6 étapes, simple et collaboratif.</p>
        {/* Stepper horizontal desktop + scrollable on petits écrans */}
        <div className="mt-14">
          {/* Horizontal (md+) */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 right-0 top-9 h-px bg-gradient-to-r from-transparent via-mywai/50 to-transparent" />
            <ol className="grid grid-cols-6 gap-6">
              {steps.map((step, i) => (
                <li key={i} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-5">
                      <div className="w-18 h-18" aria-hidden="true" />
                      <span className="relative z-10 inline-flex w-16 h-16 rounded-3xl bg-white/80 backdrop-blur ring-2 ring-mywai/30 group-hover:ring-mywai transition shadow-sm items-center justify-center">
                        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-mywai">{stepIcons[i]}</svg>
                      </span>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-mywai/80 tracking-wide">Étape {stepNumbers[i]}</span>
                    </div>
                    <h3 className="text-sm font-display font-semibold leading-snug mb-2 px-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed px-2">{step.description}</p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl -m-2 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-mywai-light/20 blur-sm" />
                </li>
              ))}
            </ol>
          </div>
          {/* Mobile vertical */}
          <ol className="md:hidden relative pl-5 before:absolute before:top-2 before:bottom-2 before:left-2 before:w-px before:bg-linear-to-b before:from-mywai/60 before:via-mywai-light/40 before:to-transparent space-y-10">
            {steps.map((step, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[11px] top-1 w-6 h-6 rounded-full bg-white ring-4 ring-mywai/30 flex items-center justify-center text-[11px] font-semibold text-mywai shadow">{stepNumbers[i]}</span>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 inline-flex w-12 h-12 rounded-2xl bg-mywai/10 ring-1 ring-mywai/20 items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-mywai">{stepIcons[i]}</svg>
                  </span>
                  <div>
                    <h3 className="text-base font-display font-semibold leading-tight mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="md"
            endIcon={<ArrowRight className="h-4 w-4" />}
            onClick={() => {
              const contact = document.getElementById('contact-b2b');
              contact?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="!bg-mywai hover:!bg-mywai-dark !text-white"
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessB2B;
