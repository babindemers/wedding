import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 pt-10 mx-auto mt-5 border-t border-gray-100 lg:grid-cols-5"></div>
        <div className="text-sm text-center text-gray-600">
          K ♥ W
        </div>
      </Container>
    </div>
  );
}
