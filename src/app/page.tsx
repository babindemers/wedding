import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";

import { Schedule } from "@/components/Schedule";
import { Accommodations } from "@/components/Accommodations";
import { Story } from "@/components/Story";
import { FAQ } from "@/components/FAQ";
import { CompleteForm } from "@/components/CompleteForm";

export default function Home() {
  return (
    <Container className="full-width">
      {/* Intro */}
      <Hero />

      {/* Horaire */}
      <Container className="bg-gray-100 full-width">
        <SectionTitle id="horaire" preTitle="Horaire" title="À quoi s `&apos;`attendre?">
          La cérémonie prendra place à 15h et sera suivie d `&apos;`un cocktail où vous
          pourrez profiter des installations avant la réception prévue pour 17h!
        </SectionTitle>
        <Schedule />
      </Container>

      {/* Hébergement */}
      <SectionTitle id="hébergement" preTitle="Hébergement" title="Profitez de votre séjour en Estrie">
        Nous sommes heureux de vous accueillir au Eastman Club pour la cérémonie
        et pour la nuit! L`&apos;`entièreté du site est privatisé, laissant la chance
        à tous nos invités de profiter du séjour en Estrie avec nous sans souci. 
      </SectionTitle>
      <Accommodations />

      {/* Notre histoire */}
      <Container className="bg-gray-100 full-width">
        <SectionTitle id="notre-histoire" preTitle="Notre histoire" title="10 ans déjà, voici un petit résumé."/>
        <Story/>
      </Container>

      {/* FAQ */}
      <SectionTitle id="faq" preTitle="FAQ" title="Questions fréquentes">
        Voici quelques questions que nous avons reçues jusqu `&apos;`à présent.
        N `&apos;`hésitez pas à nous contacter pour toutes autres interrogations.
      </SectionTitle>
      <FAQ />

      {/* Formulaire */}
      <CompleteForm />
    </Container>
  );
}
