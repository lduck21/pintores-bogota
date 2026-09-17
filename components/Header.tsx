import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 border-b border-line">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight"
        >
          Pintores Bogotá
        </Link>
        <nav className="flex gap-7 text-[0.95rem] font-medium text-inksoft">
          <Link href="/#proceso" className="hover:text-ink transition">
            Proceso
          </Link>
          <Link href="/#galeria" className="hover:text-ink transition">
            Galería
          </Link>
          <Link href="/#contacto" className="hover:text-ink transition">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
