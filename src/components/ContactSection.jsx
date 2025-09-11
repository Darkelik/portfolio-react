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
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contactez-<span className="text-primary">Moi</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w2xl mx-auto">
          Vous voulez discuter avec moi? N'hésitez pas à me contacter. Je suis
          ouvert aux nouvelles opportunités et collaborations.
        </p>

        <div className="bg-card p-8 rounded-lg shadow-xs">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"></h3>
            <div className="space-y-6 justifiy center">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Mail</h4>
                  <a
                    href="mailto:fredericvaz2016@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fredericvaz2016@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <a
                    href="tel:0613154224"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    06 13 15 42 24
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Adresse</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    91300 Massy, France
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Mes Réseaux Sociaux</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linktr.ee/darkelik" target="_blank">
                  <TreePine />
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
