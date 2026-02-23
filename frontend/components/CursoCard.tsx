import Image from "next/image";
import Button from "./Button";

interface CursoCardProps {
  imagePath: string;
  CourseName: string;
  CourseDescription: string;
}

// function CursoCard({
//   imagePath,
//   CourseName,
//   CourseDescription,
// }: CursoCardProps) {
//   return (
//     <div className="flex items-center flex-col max-w-[40vw] object-fit bg-rogno-deep mx-2 rounded-2xl px-4 py-8">
//       <div className="relative w-full aspect-video mb-4 rounded">
//         <Image
//           src={imagePath}
//           alt={CourseName}
//           fill
//           className="object-cover rounded-lg"
//           sizes="(max-width: 768px) 100vw, 33vw"
//         />
//       </div>
//       <h3 className="text-3xl font-semibold mb-2 mt-4">{CourseName}</h3>
//       <p className="mx-auto max-w-[60%]">{CourseDescription}</p>
//       <Button path={"/cursos"} text={"Ver Curso"} />
//     </div>
//   );
// }

function CursoCard2({
  imagePath,
  CourseName,
  CourseDescription,
}: CursoCardProps) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="w-[90%] max-w-425 mx-auto pt-40 pb-12">
        <div className="space-y-6 animate-fadeInUp">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-none">
            CROMATIKO<span className="text-red-600">.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 tracking-wide uppercase">
            Tu viaje comienza ahora.
          </p>
        </div>
      </div>

      {/* SECCIÓN CURSO */}
      <div className="w-[90%] max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center gap-16 pb-40 border-t border-rogno-cream pt-24">
        {/* TEXTO */}
        <div className="lg:w-[35%] space-y-8 animate-fadeInUp delay-200">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide">
            DISEÑO DE LOGO
          </h2>

          <p className="text-white/60 text-sm md:text-base uppercase tracking-wider leading-relaxed">
            UNA IDENTIDAD NO SE DISEÑA.
            <br />
            SE CONSTRUYE.
          </p>

          <button className="group relative inline-flex items-center gap-3 border border-white px-10 py-4 uppercase tracking-widest text-sm transition-all duration-500 overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              VER CURSO
            </span>

            <span className="relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-black">
              →
            </span>

            {/* Fondo animado */}
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </div>

        {/* IMAGEN */}
        <div className="lg:w-[65%] relative h-[60vh] lg:h-[75vh] animate-fadeInRight delay-300">
          {/* Overlay dramático */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

          {/* Imagen */}
          <Image
            src={imagePath}
            alt={CourseName}
            fill
            className="object-cover 6s ease-in-out infinite"
            sizes="(max-width: 768px) 100vw, 65vw"
          />
        </div>
      </div>
    </section>
  );
}

export default CursoCard2;
