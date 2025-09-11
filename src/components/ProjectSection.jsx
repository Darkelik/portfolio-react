import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Site MTG",
    description: "Un site qui explique les bases de Magic The Gathering.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "PHP", "SQL", "Web"],
    url: "https://github.com/Darkelik/MTG",
  },
  {
    id: 2,
    title: "Mini-Jeux-Party",
    description: "Un site qui contient des mini-jeux rapides. (indisponible)",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "PHP", "Web"],
    url: "#",
  },
  {
    id: 3,
    title: "Call of Printer",
    description:
      "Un jeu où on incarne un étudiant qui doit affronter une imprimante maléfique qui crée des zombies en papier.",
    image: "/projects/project3.png",
    tags: ["Unity", "C#", "Git", "Jeux"],
    url: "https://unity.skyhosting.fr/",
  },
  {
    id: 4,
    title: "Totally Lambda SwordMan",
    description: "Un épéiste. Des brigands. Que dire de plus?",
    image: "/projects/project4.png",
    tags: ["Unity", "C#", "Git", "Jeux"],
    url: "https://darkelik.itch.io/totally-lambda-swordman-tlsm",
  },
  {
    id: 5,
    title: "SUPER SUSHI SPEED",
    description: "Un jeu où on incarne un sushi mutant qui veut s'échapper.",
    image: "/projects/project5.png",
    tags: ["Godot", "GDScript", "Git", "Jeux"],
    url: "https://shazalsadepts.itch.io/super-sushi-speed",
  },
  {
    id: 6,
    title: "Archipelago",
    description:
      "Un système de Jeu de rôle où on incarne des mages avides de pouvoir.",
    image: "/projects/project6.png",
    tags: ["Jeux", "Annexes"],
    url: "#",
  },
];

function renderUrl(props) {
  if (props !== "#") {
    return (
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <a
            href="{project.url}"
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    );
  }
}

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5tl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes <span className="text-primary"> Projets</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voici quelques projets marquants que j'ai réalisé en autonomie ou en
          groupe de plusieurs étudiants. Certains de ces projets sont des
          projets d'études, d'autres sont des projets personnels que j'ai
          réalisé avec des amis et que je prévois d'approfondir dans le futur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {renderUrl(project.url)}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Darkelik"
          >
            Mon Github <ArrowRight size={16} />
          </a>
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://darkelik.itch.io/"
          >
            Mon Itch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
