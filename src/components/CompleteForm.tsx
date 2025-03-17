import React from "react";
import { Container } from "@/components/Container";

export const CompleteForm = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-logoColor px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-medium lg:text-3xl">
            Votre présence n&apos;est pas confirmée?
          </h2>
          <p className="mt-2 font-medium text-gray-300 text-opacity-90 lg:text-xl">
            Complétez le formulaire dès maintenant!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-xl font-medium text-center text-gray-500 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            RSVP
          </a>
        </div>
      </div>
    </Container>
  );
};
