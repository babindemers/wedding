import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container id="hero" className="flex flex-wrap items-center justify-center pb-0">
        <div className="flex w-full lg:w-1/4">
          <div className="">
            <Image
              src={heroImg}
              width="2000"
              height="1284"
              className={"object-cover"}
              alt="Hero Illustration"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="m-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight text-center">
              On se marie (wahooo) et on est heureux de vous accueillir au Eastman Club pour célébrer avec nous!
            </h1>
            <p className="pt-8 text-l leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              2 août 2025
            </p>
            <p className="text-l leading-normal text-gray-400 xl:text-lg text-center">
              400 Ch. George-Bonnallie, Eastman, QC
            </p>
          </div>
        </div>
        
      </Container>
    </>
  );
}
