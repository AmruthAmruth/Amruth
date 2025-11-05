"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <Link href="/" className="font-bold text-xl">Amruth.dev</Link>

        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-400 transition ${
                pathname === href ? "text-blue-400" : "text-gray-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
