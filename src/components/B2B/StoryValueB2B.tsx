import { BookOpen, BrainCircuit, Award } from 'lucide-react';

const StoryValueB2B = () => {
  const blocks: Array<{
    title: string;
    highlight?: string;
    description: string;
    icon: JSX.Element;
    accent?: string;
  }> = [
    {
      title: 'Un récit professionnel qui',
      highlight: 'traverse le temps',
      description:
        'Les objets promotionnels s’oublient. Les histoires restent. Avec MyWai, valorisez vos collaborateurs en leur offrant une biographie de carrière construite sur mesure à partir de leurs parcours, expériences et témoignages.',
      icon: <BookOpen className="h-8 w-8 text-mywai" aria-hidden="true" />,
      accent: 'from-mywai-light/40 to-mywai/10'
    },
    {
      title: 'La puissance de l’IA au service de votre histoire',
      description:
        'Notre intelligence artificielle rassemble témoignages, anecdotes, photos et archives de l’entreprise pour construire un récit cohérent, structuré et profondément humain.',
      icon: <BrainCircuit className="h-8 w-8 text-mywai" aria-hidden="true" />,
      accent: 'from-mywai/20 to-mywai-dark/10'
    },
    {
      title: 'Un vrai livre, symbole de reconnaissance et de patrimoine',
      description:
        'Imprimé en France : reliure de qualité, mise en page élégante, couverture personnalisée qui honore vos collaborateurs et valorise l’image de votre organisation.',
      icon: <Award className="h-8 w-8 text-mywai" aria-hidden="true" />,
      accent: 'from-mywai-dark/10 to-mywai-light/20'
    }
  ];

  return (
    <section
      id="value-b2b"
      className="relative section-padding bg-gradient-to-b from-white via-white to-cream/50 overflow-hidden"
      aria-labelledby="value-b2b-heading"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-mywai/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-mywai-light/20 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <header className="max-w-3xl mx-auto text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mywai/10 text-mywai text-sm font-medium tracking-wide">
            Pourquoi un livre d’entreprise ?
          </p>
          <h2
            id="value-b2b-heading"
            className="mt-6 text-3xl md:text-4xl font-display font-bold leading-tight"
          >
            Capitalisez sur votre <span className="text-mywai">mémoire collective</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Un support tangible pour transmettre culture, valeurs et vision tout en renforçant engagement & marque employeur.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <article
              key={i}
              className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-mywai/10 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${b.accent}`} />
              <div className="relative p-7 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-mywai/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-xl font-display font-bold leading-snug">
                  {b.title} {b.highlight && (
                    <span className="block text-mywai">{b.highlight}</span>
                  )}
                </h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed flex-grow">
                  {b.description}
                </p>
                <div className="mt-6 pt-4 border-t border-mywai/10 text-xs uppercase tracking-wide text-mywai/70">
                  Pillier #{i + 1}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryValueB2B;
