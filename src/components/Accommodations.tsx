import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import Carousel from "@/components/Carousel";

import eastmanClubImg from "../../public/img/hébergement/eastman-club.png";
import receptionImg from "../../public/img/réception.png";
import brunchImg from "../../public/img/brunch.png";

import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";

export const Accommodations = () => {
  return (
    <Container>
        {/* Eastman Club */}
        <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-100">
                <Carousel />
            </div>

            <div className="flex flex-wrap w-full lg:w-1/2">
                <div className="flex flex-col w-full">
                    <h3 className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
                        Dormir au Eastman Club
                    </h3>

                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl text-justify">
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
        <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
            <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
                <div>
                    <Image
                    src={eastmanClubImg}
                    width={521}
                    height={521}
                    alt="Benefits"
                    className={"object-cover"}
                    placeholder="blur"
                    />
                </div>
            </div>

            <div className="flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end">
                <div className="flex flex-col w-full mt-4">
                    <h3 className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl">
                        Dormir en Estrie
                    </h3>

                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
                        Pour les personnes souhaitant dormir à l&apos;hôtel, voici quelques options offertes dans un rayon d&apos;environ 20 minutes du Eastman Club:
                    </p>
                </div>

                <div className="w-full">
                    <Benefit title="Orford" icon={<SunIcon />}>
                        This will be your last bullet point in this section.
                    </Benefit>
                    <Benefit title="Magog" icon={<SunIcon />}>
                        This will be your last bullet point in this section.
                    </Benefit>
                    <Benefit title="Autre" icon={<SunIcon />}>
                        This will be your last bullet point in this section.
                    </Benefit>
                </div>
            </div>
        </div>
    </Container>
  );
};

function Benefit(props: any) {
    return (
        <div className="flex items-start mt-8 space-x-3">
            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-logoColor rounded-md w-11 h-11 ">
                {React.cloneElement(props.icon, {
                    className: "w-7 h-7 text-indigo-50",
                })}
            </div>
            <div>
            <h4 className="text-xl font-medium text-gray-800">
                {props.title}
            </h4>
            <p className="mt-1 text-gray-500">
                {props.children}
            </p>
            </div>
        </div>
    );
}