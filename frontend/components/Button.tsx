"use client";

import Link from "next/link";

function Button({ path, text }: { path: string; text: string }) {
  return (
    <Link
      href={path}
      target="_blank"
      className="text-xl bg-white px-4 py-2 rounded mt-4 hover:scale-105 brightness-95 hover:brightness-100 text-black"
    >
      {text}
    </Link>
  );
}

export default Button;
