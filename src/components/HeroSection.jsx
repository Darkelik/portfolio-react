import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              {" "}
              Salut! Moi, c'est
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Frédéric
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Vaz!
            </span>
          </h1>
          <div className="grid grid-cols-2 gap-8">
            
            <p className="text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 items-center">
              Aussi connu sous le surnom de{" "}
              <span className="text-primary font-semibold">Darkelik</span>, je suis un
              étudiant en informatique passionné par le développement web et la
              création de projets innovants. Diagnostiqué TDAH par un
              psychiatre, cela ne m'empêche pas d'être déterminé dans mes
              projets et poursuivre mes études. Bienvenue sur mon portfolio où
              je partage mes réalisations, compétences et aspirations
              professionnelles.
            </p>

            <img src="/items/moi.jpg" className="w-55 h-auto opacity-0 animate-fade-in-delay-3 justify-self-center" />
            
          </div>

          <p className="text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              J'ai effectué un BUT en informatique à l'IUT d'Orsay, et prévois
              de finaliser mon parcours d'études à l'école d'ingénieurs de
              l'ENSIIE. J'ai déjà eu l'opportunité de travailler en tant que
              développeur web full-stack grâce à un stage effectué en deuxième
              année du BUT informatique, où j'ai pu approfondir mes compétences
              techniques en autonomie.
            </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Voir mes projets
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Défilez </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
