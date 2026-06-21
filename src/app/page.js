"use client"

import BodyMap from "@/components/BodyMap";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto py-6 px-6">
      <h1 className="flex text-center md:text-4xl text-2xl font-semibold mb-10 md:mb-16">
        Selecione a parte do corpo que quer treinar
      </h1>
      
      <div className="flex justify-center flex-col md:flex-row items-center gap-12 w-full">
        <BodyMap id="svg-front" src="/front-body.svg" />
        <BodyMap id="svg-back" src="/back-body.svg" />
      </div>
    </div>
  );
}