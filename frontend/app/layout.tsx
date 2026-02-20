import Link from "next/link";
import "./globals.css";
import { Orbitron, Inter } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="relative w-full h-[10vh] pb-6 flex items-center bg-transparent">
          <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/30 to-transparent" />

          <ul
            className={`${orbitron.className} relative flex justify-between items-center w-full px-16 font-bold text-black`}
          >
            <li>Menu</li>
            <Link href={"/"}>
              <li className="text-[1.5rem]">Cromatiko</li>
            </Link>

            <li>User</li>
          </ul>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
