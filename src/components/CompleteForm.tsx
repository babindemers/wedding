"use client";

import React, { useState } from "react";
import { Container } from "@/components/Container";

export const CompleteForm = () => {
  return (
    <Container className="pt-0">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mx-auto text-white bg-logoColor p-4 md:p-8 md:flex-nowrap rounded-xl">
        <div className="flex-grow text-center md:text-left py-2">
          <h2 className="text-xl font-medium md:text-2xl">
            Votre présence n&apos;est pas confirmée?
          </h2>
          <p className="font-medium text-gray-300 text-opacity-90 text-lg md:text-xl">
            Complétez le formulaire dès maintenant!
          </p>
        </div>

        {/* Call-To-Action Button */}
        <div className="py-2 flex-shrink-0 w-full text-center md:w-auto">
          <button
            data-tally-open="mDMArl" data-tally-layout="modal" data-tally-emoji-text="🥂" data-tally-emoji-animation="wave"
            className="inline-block py-3 mx-auto text-xl font-medium text-center text-gray-500 bg-white rounded-md px-7 md:px-10 md:py-5 hover:bg-gray-200 transition"
          >
            RSVP
          </button>
        </div>
      </div>
    </Container>
  );
};
