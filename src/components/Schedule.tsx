import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import ceremonyImg from "../../public/img/horaire/cérémonie.png";
import receptionImg from "../../public/img/horaire/réception.png";
import brunchImg from "../../public/img/horaire/brunch.png";

export const Schedule = () => {
  return (
    <Container className="pt-0">
      <div className="grid gap-10 xl:grid-cols-3">
        <div className="col-auto">
          <div className="flex flex-col w-full h-full bg-white p-10 rounded-2xl">
          <Event
              image={ceremonyImg}
              name="Cérémonie"
              title="Samedi - 15h"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col w-full h-full bg-white p-10 rounded-2xl">
            <Event
              image={receptionImg}
              name="Réception"
              title="Samedi - 17h"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col w-full h-full bg-white p-10 rounded-2xl">
            <Event
              image={brunchImg}
              name="Brunch"
              title="Dimanche - 9h"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface EventProps {
  image: any;
  name: string;
  title: string;
}

function Event(props: Readonly<EventProps>) {
  return (
    <div className="flex items-end space-x-8">
      <div className="flex-shrink-0 overflow-hidden w-16 lg:w-24 h-16 lg:h-24">
        <Image
          src={props.image}
          width="96"
          height="96"
          alt="Event"
          priority
          loading="eager"
        />
      </div>
      <div>
        <div className="text-xl lg:text-2xl font-medium">{props.name}</div>
        <div className="lg:text-xl text-gray-600">{props.title}</div>
      </div>
    </div>
  );
}
