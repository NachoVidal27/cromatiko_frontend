import CursoCard from "@/components/CursoCard";
import { Orbitron, Inter } from "next/font/google";
import Image from "next/image";
// import { Orbitron, Inter } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <div className="">
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
          <h2 className="text-6xl lg:text-8xl font-bold tracking-tight uppercase leading-none mb-4">
            Matias Rognone
          </h2>

          <div className="text-[1.5rem] space-y-4 mb-4">
            <p>
              Diseñador gráfico uruguayo con +3 años creando identidades
              visuales estratégicas. Impulso marcas con diseño claro, creativo y
              orientado a resultados.
            </p>
          </div>
          <Link
            href={"/cursos"}
            className="group relative inline-flex items-center gap-3 border border-white px-10 py-4 uppercase tracking-widest text-sm transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Marcas
            </span>

            <span className="relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-black">
              →
            </span>

            {/* Fondo animado */}
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          </Link>
        </div>
      </div>
      {/* section C */}
      <div className="relative w-full h-[110vh] bg-rogno-brown">
        <CursoCard
          imagePath="/extras/Recurso 5.png"
          CourseName="nacho"
          CourseDescription="test"
        ></CursoCard>
      </div>
    </div>
  );
}
