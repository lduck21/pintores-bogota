export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center flex-wrap gap-3">
        <div className="font-display text-lg">Pintores Bogotá</div>
        <div className="text-right">
          <a
            href="mailto:contacto@pintoresbogota.com"
            className="text-inksoft text-sm hover:text-ink transition block"
          >
            contacto@pintoresbogota.com
          </a>
          <small className="text-inksoft text-sm">
            © {new Date().getFullYear()} Pintores Bogotá · Servicio
            residencial en Bogotá
          </small>
        </div>
      </div>
    </footer>
  );
}
