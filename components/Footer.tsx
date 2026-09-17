export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center flex-wrap gap-3">
        <div className="font-display text-lg">
          <span className="text-ocre">Pintores</span>{" "}
          <span className="text-rojo">Bogotá</span>
        </div>
        <small className="text-inksoft text-sm">
          © {new Date().getFullYear()} Pintores Bogotá · Servicio en las 20
          localidades de Bogotá D.C.
        </small>
      </div>
    </footer>
  );
}
