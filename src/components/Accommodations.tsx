import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import Carousel from "@/components/Carousel";

import eastmanClubImg from "../../public/img/hébergement/eastman-club/site.png";
import bedroomImg from "../../public/img/hébergement/eastman-club/chambre.png";
import doubleBedroomImg from "../../public/img/hébergement/eastman-club/chambre-double.png";
import livingRoomImg from "../../public/img/hébergement/eastman-club/salon.png";
import poolImg from "../../public/img/hébergement/eastman-club/piscine.png";

import estrimontImg from "../../public/img/hébergement/estrie/estrimont.png";
import manoirDesSablesImg from "../../public/img/hébergement/estrie/manoir-des-sables.png";
import quartierDesMarinasImg from "../../public/img/hébergement/estrie/quartier-des-marinas.png";
import valleaImg from "../../public/img/hébergement/estrie/vallea.png";
import vertendreImg from "../../public/img/hébergement/estrie/vertendre.png";

const eastmanClubImages = [
    { src: eastmanClubImg, alt: "Eastman Club" },
    { src: bedroomImg, alt: "Chambre simple" },
    { src: doubleBedroomImg, alt: "Chambre double" },
    { src: livingRoomImg, alt: "Salon" },
    { src: poolImg, alt: "Piscine" },
];

const estrieImages = [
    { src: estrimontImg, alt: "Estrimont" },
    { src: manoirDesSablesImg, alt: "Manoir des Sables" },
    { src: quartierDesMarinasImg, alt: "Quartier des Marinas" },
    { src: valleaImg, alt: "Hôtel Vallea" },
    { src: vertendreImg, alt: "Le Vertendre" },
];

import { PiMountains, PiWaves, PiSunHorizon } from "react-icons/pi";

export const Accommodations = () => {
  return (
    <Container className="!p-0">
        {/* Eastman Club */}
        <div className="flex flex-wrap mb-8 lg:gap-10 lg:flex-nowrap">
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <Carousel images={eastmanClubImages} autoPlay={true} interval={5000}/>
            </div>

            <div className="flex flex-wrap w-full lg:w-1/2">
                <div className="flex flex-col w-full px-8">
                    <h3 className="max-w-2xl my-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
                        Dormir au Eastman Club
                    </h3>

                    <p className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl text-justify">
                        Le Eastman Club offre 100 places pour dormir dans 32 chambres
                        distinctes. Les trois chalets du site comportent plusieurs salles
                        de bain rénovées, assurant ainsi confort et intimité pour chaque invité.
                        <br/><br/>

                        Si vous souhaitez dormir sur place, il nous fera plaisir de
                        vous attribuer une chambre sans frais. Nous 
                        assignerons les chambres en fonction de la configuration de
                        celles-ci (nombre de lits, taille) et des personnes à proximité
                        pour assurer votre confort. Un déjeuner sera servi le dimanche
                        matin avant le départ du site prévu pour 11 h. Référez-vous à
                        la section <a href="#faq" className="underline">FAQ</a> pour 
                        savoir quoi apporter pour votre nuit au Eastman Club.
                    </p>
                </div>
            </div>
        </div>
        

        {/* Estrie */}
        <div className="flex flex-wrap mb-8 lg:gap-10 lg:flex-nowrap">
            <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
                <Carousel images={estrieImages} autoPlay={true} interval={5000}/>
            </div>

            <div className="flex flex-wrap w-full lg:w-1/2 lg:justify-end">
                <div className="flex flex-col w-full px-8">
                    <h3 className="max-w-2xl my-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
                        Dormir en Estrie
                    </h3>

                    <p className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl text-justify">
                        Pour les personnes souhaitant dormir à l&apos;hôtel, voici quelques options offertes 
                        dans un rayon d&apos;environ 20 minutes du Eastman Club:
                    </p>
                    
                    <Benefit title="Orford" icon={<PiMountains />}>
                        <a href="https://www.estrimont.ca/" className="underline hover:no-underline">Estrimont</a>,&nbsp;
                        <a href="https://manoirdessables.com/" className="underline hover:no-underline">Manoir des Sables</a>,&nbsp; 
                        <a href="https://hotelcheribourg.com/" className="underline hover:no-underline">Hôtel Chéribourg</a>
                    </Benefit>
                    <Benefit title="Magog" icon={<PiWaves  />}>
                        <a href="https://hotelverso.ca/" className="underline hover:no-underline">Hôtel Verso</a>,&nbsp;
                        <a href="https://www.hotelqdm.ca/" className="underline hover:no-underline">Quartier des Marinas</a>
                    </Benefit>
                    <Benefit title="Autre" icon={<PiSunHorizon />}>
                        <a href="https://levertendre.com/" className="underline hover:no-underline">Le Vertendre</a>,&nbsp;
                        <a href="https://hotelvallea.com/" className="underline hover:no-underline">Hôtel Vallea</a>
                    </Benefit>
                </div>
            </div>
        </div>
    </Container>
  );
};

function Benefit(props: any) {
    return (
        <div className="flex items-start mt-4 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-logoColor rounded-md w-11 h-11 ">
                {React.cloneElement(props.icon, {
                    className: "w-7 h-7 text-indigo-50",
                })}
            </div>
            <div>
            <h4 className="text-xl font-medium text-gray-800">
                {props.title}
            </h4>
            <p className="text-gray-500">
                {props.children}
            </p>
            </div>
        </div>
    );
}