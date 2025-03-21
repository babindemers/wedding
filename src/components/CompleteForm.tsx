"use client";

import React, { useState } from "react";
import { Container } from "@/components/Container";

export const CompleteForm = () => {
  return (
    <Container className="pt-0">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mx-auto text-white bg-logoColor p-4 lg:p-8 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-medium lg:text-3xl">
            Votre présence n&apos;est pas confirmée?
          </h2>
          <p className="mt-2 font-medium text-gray-300 text-opacity-90 lg:text-xl">
            Complétez le formulaire dès maintenant!
          </p>
        </div>

        {/* Call-To-Action Button */}
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
            data-tally-open="mDMArl" data-tally-layout="modal" data-tally-emoji-text="🥂" data-tally-emoji-animation="wave"
            className="inline-block py-3 mx-auto text-xl font-medium text-center text-gray-500 bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-200 transition"
          >
            RSVP
          </button>
        </div>
      </div>
    </Container>
  );
};
