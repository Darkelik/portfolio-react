import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

const skills = [
  {
    name: "HTML",
    level: 75,
    category: "Frontend",
    logo: "/items/logos/html.png",
  },
  {
    name: "CSS",
    level: 75,
    category: "Frontend",
    logo: "/items/logos/css.png",
  },
  {
    name: "React",
    level: 50,
    category: "Frontend",
    logo: "/items/logos/react.png",
  },

  { name: "SQL", level: 75, category: "Backend", logo: "/items/logos/sql.png" },
  { name: "JavaScript", level: 50, category: "Backend", logo: "/items/logos/js.png" },
  { name: "TypeScript", level: 50, category: "Backend", logo: "/items/logos/ts.png" },
  { name: "PHP", level: 50, category: "Backend", logo: "/items/logos/php.png" },

  {
    name: "Python",
    level: 75,
    category: "App",
    logo: "/items/logos/python.png",
  },
  { name: "Java", level: 50, category: "App", logo: "/items/logos/java.svg" },
  { name: "C#", level: 50, category: "App", logo: "/items/logos/cs.png" },
  { name: "C", level: 25, category: "App", logo: "/items/logos/c.png" },
  { name: "C++", level: 25, category: "App", logo: "/items/logos/c++.png" },
  { name: "GDScript", level: 25, category: "App", logo: "/items/logos/gdscript.png" },

  {
    name: "VS Code",
    level: 75,
    category: "Outils",
    logo: "/items/logos/vscode.png",
  },
  { name: "Git", level: 50, category: "Outils", logo: "/items/logos/git.png" },
  {
    name: "Unity",
    level: 50,
    category: "Outils",
    logo: "/items/logos/unity.png",
  },
  { name: "Jupyter", level: 50, category: "App", logo: "/items/logos/jupyter.png" },
  { name: "Godot", level: 25, category: "App", logo: "/items/logos/godot.png" },

  {
    name: "Français",
    level: 100,
    category: "Langues",
    logo: "/items/logos/france.webp",
  },
  {
    name: "Anglais",
    level: 75,
    category: "Langues",
    logo: "/items/logos/US-UK.png",
  },
  {
    name: "Espagnol",
    level: 25,
    category: "Langues",
    logo: "/items/logos/spain.webp",
  },
];

const categories = ["Tout", "Frontend", "Backend", "App", "Outils", "Langues"];

function getMark(level) {
  if (level == 100) return "Maitrise";
  if (level == 75) return "Avancé";
  if (level == 50) return "Intermédiaire";
  if (level == 25) return "Débutant";
  return "Erreur";
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Tout" || skill.category === activeCategory
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={cn(
        "py-24 px-4 relative bg-secondary/30 transition-opacity duration-1000",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary"> Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-8 w-8 object-contain aspect-square"
                />
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {getMark(skill.level)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
