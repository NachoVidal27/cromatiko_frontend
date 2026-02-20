"use client";
import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import Data from "./Data";
import Preguntas from "./Preguntas";

function Cursos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-10 py-10 flex flex-col items-center">
      <div className="px-10 py-10 flex flex-col items-center mx-8 bg-black rounded h-fit">
        <h1 className="text-4xl font-bold pb-2 border-b-2 w-[30vw] text-center">
          Cursos
        </h1>
        <div className="pt-4">
          <VideoPlayer videoId="1165689581?share=copy&fl=sv&fe=ci" />
        </div>
      </div>
      <Data></Data>
      <Preguntas></Preguntas>
    </div>
  );
}

export default Cursos;
