"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { div } from "framer-motion/client";
// import Data from "./Data";
// import Preguntas from "./Preguntas";

function Cursos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black h-screen px-10 py-4">
      <section className="bg-black w-screen  flex flex-row items-top justify-around mx-12">
        <div className="w-[30vw] h-[50vh] me-4 pt-16">
          <div>
            <h2 className="text-white/60 text-sm pb-6">CURSO INICIAL</h2>
            <h1 className="text-5xl font-semibold">DISEÑO DE</h1>
            <h1 className="text-8xl font-bold pb-2">LOGO</h1>
            <p className="text-md text-white/60">
              UNA IDENTIDAD NO SE DISEÑA.{" "}
              <span className="text-white">SE CONSTRUYE.</span>
            </p>
          </div>

          <div className="flex items-center justify-start text-sm mt-4">
            <div className="flex items-center justify-center border-e border-white/60 pe-8 ">
              <Image
                src="/logo-invertido.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full me-4"
              />
              <div>
                <p className="text-white/60">DICTADO POR</p>
                <h3>MATIAS ROGNONE</h3>
              </div>
            </div>
            <div className="text-sm ps-4 text-white/60 ">
              <p>DURACION</p>
              <p>28 HORAS</p>
            </div>
          </div>
        </div>
        <div className="w-[70vw] bg-black me-10 pt-10">
          <VideoPlayer
            videoId={"1165689581?share=copy&fl=sv&fe=ci"}
          ></VideoPlayer>
        </div>
      </section>
      <div className="border-white h-px bg-white/60 my-8 mx-12" />
      <section className="flex items-top justify-around mx-10">
        <div className="me-2 w-[20vw]">
          <h2>Sobre este curso</h2>
          <br className="border-b-2 border-white w-12.5" />
        </div>
        <div className="me-2 w-[40vw]">
          Aprened a construit identidades visuales desde la estrategia con un
          metodo profesional, claro y accionable. Cada modulo te llevara desde
          la investigación hasta la presentación final de un sistemaa de marca
          completo
        </div>
        <div className="flex justify-between w-[25vw]">
          <div>Coso1</div>
          <div>Coso2</div>
          <div>Coso3</div>
          <div>Coso4</div>
        </div>
      </section>
    </div>
  );
}

export default Cursos;
