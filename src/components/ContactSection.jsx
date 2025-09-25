import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  TreePine,
  Twitch,
  Youtube,
  Github,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 relative bg-secondary/30 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contactez-<span className="text-primary">Moi</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Vous voulez discuter avec moi? N'hésitez pas à me contacter.
          <br />
          Je suis ouvert aux nouvelles opportunités et collaborations.
        </p>

        <div className="flex justify-center">
          <div className="bg-card p-8 rounded-lg shadow-xs w-full max-w-md">
            <div className="space-y-8 flex flex-col items-center">
              {/* Mail */}
              <div className="flex items-center gap-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 w-12 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left min-w-0 w-64">
                  <h4 className="font-medium">Mail</h4>
                  <a
                    href="mailto:fredericvaz2016@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fredericvaz2016@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 w-12 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left min-w-0 w-64">
                  <h4 className="font-medium">Téléphone</h4>
                  <a
                    href="tel:0613154224"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    06 13 15 42 24
                  </a>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center gap-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 w-12 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left min-w-0 w-64">
                  <h4 className="font-medium">Adresse</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    91300 Massy, France
                  </span>
                </div>
              </div>
            </div>
            {/* Socials */}
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Mes Réseaux Sociaux</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linktr.ee/darkelik" target="_blank">
                  <TreePine />
                </a>
                <a href="https://github.com/darkelik" target="_blank">
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/frederic-vaz/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/darkelik/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://www.youtube.com/@darkelik7187" target="_blank">
                  <Youtube />
                </a>
                <a href="https://www.twitch.tv/darkelik5" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
