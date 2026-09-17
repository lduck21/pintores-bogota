import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 border-b border-line">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight flex items-baseline gap-1"
        >
          <span className="text-ocre">Pintores</span>{" "}
          <span className="text-rojo">Bogotá</span>
        </Link>
        <nav className="flex gap-7 text-[0.95rem] font-medium text-inksoft">
          <Link href="/#servicios" className="hover:text-ink transition">
            Servicios
          </Link>
          <Link href="/#localidades" className="hover:text-ink transition">
            Localidades
          </Link>
          <Link href="/#contacto" className="hover:text-ink transition">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
