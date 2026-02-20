import Image from "next/image";
import Button from "./Button";

interface CursoCardProps {
  imagePath: string;
  CourseName: string;
  CourseDescription: string;
}

function CursoCard({
  imagePath,
  CourseName,
  CourseDescription,
}: CursoCardProps) {
  return (
    <div className="flex items-center flex-col max-w-[40vw] object-fit bg-black mx-2 rounded-2xl px-4 py-8">
      <div className="relative w-full aspect-video mb-4 rounded">
        <Image
          src={imagePath}
          alt={CourseName}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="text-3xl font-semibold mb-2 mt-4">{CourseName}</h3>
      <p className="mx-auto max-w-[60%]">{CourseDescription}</p>
      <Button path={"https://google.com"} text={"Ver Curso"} />
    </div>
  );
}

export default CursoCard;
