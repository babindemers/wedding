import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import Carousel from "@/components/Carousel";

import highSchoolImg from "../../public/img/notre-histoire/1-saint-alex.png";
import partyImg from "../../public/img/notre-histoire/2-party.png";

import graduation2016Img from "../../public/img/notre-histoire/3-graduation-2016.png";
import movingOutImg from "../../public/img/notre-histoire/4-demenagement.png";
import roommatesImg from "../../public/img/notre-histoire/5-colocs.png";
import graduationKarinaImg from "../../public/img/notre-histoire/6-graduation-karina.png";
import condoImg from "../../public/img/notre-histoire/7-condo.png";
import graduationWillImg from "../../public/img/notre-histoire/8-graduation-will.png";
import italyImg from "../../public/img/notre-histoire/9-italie.png";
import owlsHeadImg from "../../public/img/notre-histoire/10-owls-head.png";
import danikaOliImg from "../../public/img/notre-histoire/11-danika-oli.png";
import danikaAlexeImg from "../../public/img/notre-histoire/12-danika-alexe.png";

const carouselImages = [
  { src: graduation2016Img, alt: "Graduation 2016" },
  { src: movingOutImg, alt: "Déménagement" },
  { src: roommatesImg, alt: "Colocs" },
  { src: graduationKarinaImg, alt: "Graduation Karina" },
  { src: condoImg, alt: "Condo" },
  { src: graduationWillImg, alt: "Graduation Will" },
  { src: italyImg, alt: "Italie" },
  { src: owlsHeadImg, alt: "Owl's Head" },
  { src: danikaOliImg, alt: "Danika et Olivier" },
  { src: danikaAlexeImg, alt: "Danika et Alexe" },
];

export const Story = () => {
  return (
    <Container className="flex w-full flex-col items-center justify-left text-justify p-8">
      <div className="w-full max-w-7xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
        Il était une fois, dans la lointaine contrée de Gatineau, deux âmes destinées
        à se rencontrer… alors qu&apos;ils n&apos;avaient que 16 ans!
        <br/><br/>

        <Image
          src={highSchoolImg}
          alt="Groupe 442"
          width={400}
          height={500}
          className="float-none md:float-right pb-4 md:pl-4 w-full md:w-1/2"
        />

        Tout commence en 2014, dans le mythique groupe 442 de l&apos;école secondaire
        Saint-Alexandre, à la rentrée du secondaire 4. Karina, fraîchement débarquée
        d&apos;une école de filles, et William, étudiant modèle (ou presque) et grand joueur
        de hockey, se retrouvent voisins de bureau en classe de français. Pendant plusieurs mois,
        leur seule interaction se limite à Karina qui demande à William de fermer la maudite fenêtre
        parce qu&apos;elle grelotte, tandis que lui, encore en sueur de son match de soccer du midi, profite du courant d&apos;air.
        <br/><br/>

        Rien ne laissait présager une grande romance. Karina trouvait William pas mal beau
        avec ses grands yeux bleus brillants, mais restait méfiante face au spécimen des
        « hockey boys » qui ont une mauvaise réputation. De son côté, William n&apos;avait pas eu 
        de révélation instantanée… jusqu&apos;au printemps. Petit à petit, leurs groupes d&apos;amis
        respectifs commencent à fusionner. Puis, à la fête de William le 13 mars, en grand 
        geste de générosité, Karina lui offre… les kiwis de son lunch. Une semaine plus 
        tard, pour la fête de Karina, William lui rend la pareille avec un paquet de LifeSavers 
        (qu&apos;elle découvrira plus tard être un <i>regift</i>… tellement galant!). Une amitié s&apos;installe à partir de ce moment.
        <br/><br/>

        Puis, c&apos;est lors d&apos;un simple cours de badminton que tout bascule : Karina entre dans le gymnase,
        cheveux au vent, sourire éclatant… et BOOM, le cœur de William décide que c&apos;est ELLE. Mais fidèle
        à lui-même, il ne laisse rien paraître. Karina, elle, continue à vaquer à ses occupations, inconsciente
        du fait qu&apos;elle vient de déclencher une tempête intérieure chez son voisin de bureau.
        <br/><br/>

        Petit à petit, les deux amis commencent à se parler en classe, à partager leurs notes de
        cours et à s&apos;envoyer des textos sur Snapchat en rentrant de l&apos;école (gros move en 2015). Tranquillement,
        un réel intérêt commence à germer entre eux. 
        <br/><br/>

        <Image
          src={partyImg}
          alt="Réception"
          width={400}
          height={500}
          className="float-none md:float-left pb-4 md:pr-4 w-full md:w-1/2"
        />

        Juin arrive et, enfin, les indices se font plus clairs. Au début du mois, lors d&apos;un party organisé chez
        leur ami Gabriel, leurs amis quittent la maison vers le McDo en les laissant seuls… et laissant place à
        leur premier baiser en toute intimité. À partir de là, c&apos;est une évidence : ces deux-là sont inséparables.
        Les années passent; ils graduent du secondaire ensemble, partagent un casier au cégep, et quand vient le temps de
        choisir une université, le destin les conduit à Sherbrooke. En 2018, à 19 ans, ils emménagent dans leur premier
        appartement, le 2975 rue Richard, alias leur nid d&apos;amour pendant 5 ans. À cet endroit, ils étudient fort, mais font
        aussi plusieurs partys et ont même une coloc (un peu imprévue) durant plus d&apos;un an.
        <br/><br/>

        Après avoir décroché leurs diplômes, ils prennent officiellement racine à Sherbrooke et deviennent propriétaires d&apos;un
        condo (à 450 mètres de leur appartement). Puis, après neuf ans de vie de couple, des voyages, des projets et quelques
        soirées bien arrosées, William décide enfin de poser LA question, le 20 octobre 2024, au sommet du mont Owl&apos;s Head.
        <br/><br/>

        Et c&apos;est ainsi que le samedi 2 août 2025, ils s&apos;apprêtent à écrire le prochain chapitre de leur histoire, cette fois-ci en
        tant que mari et femme… avec les mêmes papillons au ventre qu&apos;en 2015!
        <br/><br/>

        <i><b>Fun fact:</b> Leurs frères et sœurs se sont rencontrés avant eux ! Danika et Olivier en 2011 à la finale provinciale
        d&apos;Expo-Sciences, puis Alexandra et Danika au cégep entre 2014 et 2016.</i>
        <br/><br/>

        <div className="flex items-center justify-center w-full">
          <Carousel images={ carouselImages } autoPlay={ false }/>
        </div>
      </div>
    </Container>
  );
};
