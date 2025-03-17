"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const FAQ = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Y a-t-il un « dress code » à respecter?",
    answer: "Rien de strict ! On veut que vous soyez chic, mais surtout à l'aise. La cérémonie se déroulera dehors (si dame nature le permet), sur du gazon… donc attention aux talons aiguilles qui pourraient s'enfoncer ! Le 2 août risque d'être chaud, alors mieux vaut éviter les tenues trop étouffantes si le soleil est au rendez-vous.",
  },
  {
    question: "À quelle heure arriver au Eastman Club?",
    answer: "Vous pouvez arriver sur le site à partir de 15h, le temps de profiter du cadre enchanteur et de prendre place tranquillement. La cérémonie commencera officiellement à 16h… et, pour une fois, on va essayer d&apos;être à l&apos;heure!  Alors, ne nous suivez pas dans nos mauvaises habitudes et soyez là à temps!",
  },
  {
    question: "Qu&apos;arrive-t-il en cas de pluie?",
    answer:
      "Si la météo décide de jouer les trouble-fêtes, on a un plan B tout aussi magique. La cérémonie aura lieu à l&apos;intérieur et vous serez ensuite invités à la seconde salle de réception pour le cocktail, le temps qu&apos;on prépare la salle pour le repas. La salle de jeux et le bar au sous-sol seront aussi à votre disposition pour vous amuser tout en restant au sec.",
  },
  {
    question: "Dois-je prévoir de l'argent pour le bar?",
    answer:
      "Bonne nouvelle : nous prenons soin de vos verres toute la soirée!  De fabuleux barmans s&apos;occuperont de vous pendant le cocktail et jusqu'à 21h. Si le cœur vous en dit, un pourboire pour les remercier de leur talent est toujours apprécié. Après 21h, le bar passe en mode *self-service*. Au menu : vin, cocktail, seltzer, mocktails (et sûrement quelques shotguns…). Cheers! *Notez que vous pouvez apporter votre propre alcool si vous le souhaitez.*",
  },
  {
    question: "Est-ce qu&apos;il y a un registre de cadeaux?",
    answer:
      "Votre présence à nos côtés est déjà un merveilleux cadeau pour nous! Comme nous avons déjà tout ce qu&apos;il nous faut à la maison, nous n&apos;avons pas de registre cadeaux. Si vous le souhaitez, vous pouvez nous gâter avec une contribution à notre voyage de noces en Scandinavie. Un espace sera prévu à cet effet dans la salle de réception.",
  },
  {
    question: "Comment se rendre au Eastman Club?",
    answer:
      "L&apos;adresse exacte est 400 Chemin George-Bonnallie, Eastman (QC) J0E 1P0 et pour éviter toute tentative d&apos;exploration imprévue des forêts des Cantons-de-l'Est, on vous conseille de bien entrer la destination dans votre GPS avant de partir.",
  },
  {
    question: "Y a-t-il du stationnement sur place ainsi que des bornes de recharges?",
    answer:
      "Il y a largement de quoi stationner toutes les voitures. À votre arrivée, des personnes vous guideront pour optimiser l'espace, surtout pour ceux qui ne restent pas dormir. Pour les voitures électriques, deux bornes Tesla sont disponibles. Faites-nous signe si vous comptez les utiliser!",
  },
  {
    question: "Que faut-il prévoir si nous dormons sur place?",
    answer:
      "Vous prolongez la fête avec nous jusqu&apos;au déjeuner du lendemain? Yeay! Toutes les chambres sont équipées de literie et serviettes, donc vous n&apos;aurez besoin que de vos effets personnels. Si vous campez en tente, roulotte ou van, les salles de bains seront accessibles, mais veillez à apporter vos serviettes si vous souhaitez vous doucher. À votre arrivez, veuillez garder vos baggages dans votre voiture. Vous aurez suffisamment de temps après la cérémonie pour trouver votre chambre et vous y installer avant la réception. *Pssst.. si jamais l&apos;envie vous prend de vous rafraîchir, une piscine creusée et des jacuzzis sont à votre disposition! N&apos;oubliez pas de mettre votre maillot de bain dans votre valise!"
  },
];
