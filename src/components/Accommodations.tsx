import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import Carousel from "@/components/Carousel";

import eastmanClubImg from "../../public/img/hébergement/eastman-club/site.png";
import bedroomImg from "../../public/img/hébergement/eastman-club/chambre.png";
import livingRoomImg from "../../public/img/hébergement/eastman-club/salon.png";
import poolImg from "../../public/img/hébergement/eastman-club/piscine.png";

import magogImg from "../../public/img/hébergement/estrie/magog.jpg";
import estrimontImg from "../../public/img/hébergement/estrie/estrimont.jpg";
import vetendreImg from "../../public/img/hébergement/estrie/vertendre.jpg";
import lacImg from "../../public/img/hébergement/estrie/lac.jpg";

const eastmanClubImages = [
    { src: eastmanClubImg, alt: "Eastman Club" },
    { src: bedroomImg, alt: "Chambre de l'Ensoleillé" },
    { src: livingRoomImg, alt: "Salon de l'Intime" },
    { src: poolImg, alt: "Piscine" },
];

const estrieImages = [
    { src: magogImg, alt: "Magog" },
    { src: estrimontImg, alt: "Estrimont" },
    { src: vetendreImg, alt: "Le Vertendre" },
    { src: lacImg, alt: "Lac Memphrémagog" },
];

import { PiMountains, PiWaves, PiSunHorizon } from "react-icons/pi";

export const Accommodations = () => {
  return (
    <Container className="!p-0">
        {/* Eastman Club */}
        <div className="flex flex-wrap mb-8 lg:gap-10 lg:flex-nowrap">
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <Carousel images={eastmanClubImages} />
            </div>

            <div className="flex flex-wrap w-full lg:w-1/2">
                <div className="flex flex-col w-full p-4">
                    <h3 className="max-w-2xl my-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
                        Dormir au Eastman Club
                    </h3>

                    <p className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl text-justify">
                        Le Eastman Club offre 100 places pour dormir dans 32 chambres
                        distinctes. Les trois chalets du site comporte plusieurs salles
                        de bain rénovées, assurant ainsi confort et intimité pour chaque invité.
                        <br/><br/>

                        Si vous souhaitez dormir sur place, il nous fera plaisir de
                        vous attribuer une chambre qui répondra à vos besoins. Nous 
                        assignerons les chambres en fonction de la configuration de
                        celles-ci (nombre de lits, taille) et des personnes à proximité
                        pour assurer votre confort. Un déjeuner sera servi le dimanche
                        matin avant le départ du site prévu pour 11 h. Référez-vous à
                        la FAQ pour savoir quoi apporter pour votre nuit au Eastman Club.
                    </p>
                </div>
            </div>
        </div>
        

        {/* Estrie */}
        <div className="flex flex-wrap mb-8 lg:gap-10 lg:flex-nowrap">
            <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
                <Carousel images={estrieImages} />
            </div>

            <div className="flex flex-wrap w-full lg:w-1/2 lg:justify-end">
                <div className="flex flex-col w-full p-4">
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