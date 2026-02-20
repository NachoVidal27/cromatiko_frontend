import CursoCard from "@/components/CursoCard";
import { Orbitron } from "next/font/google";
import Image from "next/image";
// import { Orbitron, Inter } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// });

export default function Home() {
  return (
    <>
      <div className="w-full h-[110vh]">
        <video
          src="/heroVideo.mp4"
          className="w-full h-[110vh] object-cover"
          autoPlay
          muted
          loop
        />
      </div>
      {/* section B */}
      <div className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden group bg-rogno-deep">
        {/* Imagen */}
        <div
          className="
    absolute
    transition-all
    duration-1300
    ease-[cubic-bezier(0.22,1,0.36,1)]
    left-1/2
    -translate-x-1/2
    group-hover:left-[25%]
  "
        >
          <Image
            src="/RognoFrontal.png"
            alt="Rogno Frontal"
            height={1000}
            width={750}
            className="
      h-[80vh]
      w-auto
      transition-all
      duration-1300
      ease-[cubic-bezier(0.22,1,0.36,1)]
    "
          />
        </div>

        {/* Texto */}
        <div
          className="
    absolute
    right-[10%]
    w-[40vw]
    opacity-0
    translate-x-16
    transition-all
    duration-1300
    ease-[cubic-bezier(0.22,1,0.36,1)]
    group-hover:opacity-100
    group-hover:translate-x-0
  "
        >
          <h2 className="text-[3rem] font-bold mb-4">
            Dale rogno armate un texto
          </h2>

          <div className="text-[1.5rem] space-y-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link
              href={"/cursos"}
              className=" bg-white px-4 py-2 text-[1.5rem] text-black rounded cursor-pointer hover:scale-150"
            >
              Diseño de Marca
            </Link>
          </div>
        </div>
      </div>
      {/* section C */}
      <div
        className={`${orbitron.className}relative w-full h-[110vh] flex flex-col items-center justify-center overflow-hidden group bg-rogno-cream`}
      >
        <h2 className=" text-[2.5rem] font-semibold mb-6 text-black">
          Tu viaje con Cromatiko comienza ahora.
        </h2>
        <div className="h-[contain] w-[80vw] flex items-center justify-around px-10 py-6">
          <CursoCard
            imagePath="/extras/Recurso 5.png"
            CourseName="diseño de logo"
            CourseDescription="lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate."
          ></CursoCard>
          <CursoCard
            imagePath="/extras/Recurso 5.png"
            CourseName="diseño de logo"
            CourseDescription="lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate."
          ></CursoCard>
        </div>
      </div>
      {/* section D */}
      <div className="w-full h-[110vh] bg-rogno-deep">
        <div className="group relative h-screen w-screen flex items-center justify-center bg-gold overflow-hidden">
          {/* Imagen principal */}
          <Image
            src="/RognoPintor.png"
            alt="Rogno Artista"
            height={1000}
            width={450}
            className="
        relative z-10
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-75
        group-hover:opacity-0
        group-hover:blur-sm
      "
          />

          {/* Imagen que sube */}
          <Image
            src="/DisenoLogo.png"
            alt="Curso Diseño Logo"
            height={1000}
            width={1300}
            className="
        absolute
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        translate-y-full
        opacity-0
        group-hover:translate-y-0
        group-hover:opacity-100
      "
          />
        </div>
      </div>
    </>
  );
}
