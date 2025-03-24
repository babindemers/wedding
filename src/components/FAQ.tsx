"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

// Import images
import dressCodeImg from "../../public/img/faq/dresscode.png";
import arrivalImg from "../../public/img/faq/arrival.png";
import rainImg from "../../public/img/faq/rain.png";
import barImg from "../../public/img/faq/bar.png";
import giftImg from "../../public/img/faq/gift.png";
import locationImg from "../../public/img/faq/location.png";
import parkingImg from "../../public/img/faq/parking.png";
import overnightImg from "../../public/img/faq/overnight.png";

const faqSections = [
  {
    title: "Cérémonie",
    questions: [
      {
        question: "Y a-t-il un « dress code » à respecter?",
        answer:
          "Rien de strict ! On veut que vous soyez chic, mais surtout à l'aise. La cérémonie se déroulera " +
          "dehors (si dame nature le permet), sur du gazon… donc attention aux talons aiguilles qui pourraient " +
          "s'enfoncer ! Le 2 août risque d'être chaud, alors mieux vaut éviter les tenues trop étouffantes si le soleil est au rendez-vous.",
        image: dressCodeImg,
      },
      {
        question: "À quelle heure arriver au Eastman Club?",
        answer:
          "Vous pouvez arriver sur le site à partir de 14h, le temps de profiter du cadre enchanteur et de " +
          "prendre place tranquillement. La cérémonie commencera officiellement à 15h… et, pour une fois, on va essayer d'être à l'heure!",
        image: arrivalImg,
      },
      {
        question: "Qu'arrive-t-il en cas de pluie?",
        answer:
          "Si la météo décide de jouer les trouble-fêtes, on a un plan B tout aussi magique. La cérémonie " +
          "aura lieu à l'intérieur et vous serez ensuite invités à la seconde salle de réception pour le cocktail, " +
          "le temps qu'on prépare la salle pour le repas. La salle de jeux et le bar au sous-sol seront aussi à votre " +
          "disposition pour vous amuser tout en restant au sec.",
        image: rainImg,
      },
    ],
  },
  {
    title: "Réception",
    questions: [
      {
        question: "Dois-je prévoir de l'argent pour le bar?",
        answer:
          "Bonne nouvelle : nous prenons soin de vos verres toute la soirée!  De fabuleux barmans s'occuperont de vous " + 
          "pendant le cocktail et jusqu'à 21h. Si le cœur vous en dit, un pourboire pour les remercier de leur talent sera " +
          "toujours apprécié. Après 21h, le bar demeurera ouvert, mais pessera en mode <i>self-service</i> pour le reste de la soirée. " +
          "Au menu : vin, cocktail, seltzer, mocktails (et sûrement quelques shotguns…). Cheers!",
        image: barImg,
      },
      {
        question: "Est-ce qu'il y a un registre de cadeaux?",
        answer:
          "Votre présence à nos côtés est déjà un merveilleux cadeau pour nous! Comme nous avons déjà tout ce qu'il nous faut " +
          "à la maison, nous n'avons pas de registre de cadeaux. Si vous le souhaitez, vous pouvez nous gâter avec une contribution " +
          "à notre voyage de noces en Scandinavie. Un espace sera prévu à cet effet dans la salle de réception, ou vous pouvez faire un transfert au (819) 923-3062.",
        image: giftImg,
      },
    ],
  },
  {
    title: "Eastman Club",
    questions: [
      {
        question: "Comment se rendre au Eastman Club?",
        answer:
          "L'adresse exacte est <a href='https://maps.app.goo.gl/bujr7eHEChTrc7TX7' class='underline'>400 Chemin George-Bonnallie, Eastman (QC), J0E 1P0</a> et pour éviter toute tentative d'exploration " +
          "imprévue des forêts des Cantons-de-l'Est, on vous conseille de bien entrer la destination dans votre GPS avant de partir.",
        image: locationImg,
      },
      {
        question: "Y a-t-il du stationnement sur place ainsi que des bornes de recharges?",
        answer:
          "Il y a suffisamment d'espace pour se stationner sur le site. À votre arrivée, des personnes vous guideront pour optimiser " +
          "l'espace. Pour les voitures électriques, deux bornes Tesla sont disponibles. " +
          "Si vous comptez les utiliser, assurez-vous de l'indiquer dans le formulaire de participation.",
        image: parkingImg,
      },
      {
        question: "Que faut-il prévoir si nous dormons sur place?",
        answer:
          "Vous prolongez la fête avec nous jusqu'au brunch du lendemain? Yeay! Les chambres sont offertes sans frais et sont équipées " +
          "de literie et de serviettes, donc vous n'aurez besoin que de vos effets personnels. Notez cependant que les chambres ne sont " +
          "pas climatisées et que les salles de bains sont communes. Si vous campez en tente, roulotte ou van, celles-ci vous seront " +
          "accessibles, mais veillez à apporter votre serviette si vous souhaitez vous doucher. À votre arrivée, veuillez garder vos " +
          "bagages dans votre voiture. Vous aurez suffisamment de temps après la cérémonie pour trouver votre chambre et vous y installer " +
          "avant la réception.<br/><br/>" +
          "<i>Pssst.. Si l'envie vous prenait de vous rafraîchir, une piscine creusée et des jacuzzis seront à votre disposition! N'oubliez " +
          "pas de mettre votre maillot de bain et votre serviette de piscine dans votre valise!</i>",
        image: overnightImg,
      },
    ],
  },
];

export const FAQ = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-4xl mx-auto rounded-2xl px-8">
        {faqSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-10">
            {/* Section Title */}
            <div className="text-xl font-semibold text-gray-700 mb-4">
              {section.title}
            </div>

            {/* Questions */}
            {section.questions.map((item, index) => (
              <FAQItem key={item.question} item={item} />
            ))}

            {/* Divider between sections */}
            {sectionIndex < faqSections.length - 1 && (
              <hr className="my-8 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

const FAQItem = ({ item }: { item: { question: string; answer: string; image: any } }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="mb-5">
          <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100">
            <span>{item.question}</span>
            <ChevronUpIcon className={`${open ? "" : "transform rotate-180"} w-5 h-5 text-gray-400`} />
          </DisclosureButton>
          <DisclosurePanel className="px-4 pt-4 pb-2 flex items-start gap-4 text-gray-500">
            {/* Image (Only displayed when expanded) */}
            {open && (
              <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24">
                <Image src={item.image} width="96" height="96" alt={item.question} loading="eager"/>
              </div>
            )}
            {/* Answer with HTML rendering */}
            <p className="flex-1 text-lg" dangerouslySetInnerHTML={{ __html: item.answer }} />
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};
