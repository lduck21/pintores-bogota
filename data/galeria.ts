export interface ProyectoGaleria {
  id: string;
  titulo: string;
  beforeSrc: string;
  afterSrc: string;
}

// Para agregar o reemplazar un proyecto: solo cambia las rutas de imagen
// (o agrega un nuevo objeto al arreglo). Las imágenes viven en
// public/images/galeria/<id>-antes.jpg y <id>-despues.jpg.
export const galeria: ProyectoGaleria[] = [
  {
    id: "proyecto-1",
    titulo: "",
    beforeSrc: "/images/galeria/proyecto-1-antes.jpg",
    afterSrc: "/images/galeria/proyecto-1-despues.jpg",
  },
  {
    id: "proyecto-2",
    titulo: "",
    beforeSrc: "/images/galeria/proyecto-2-antes.jpg",
    afterSrc: "/images/galeria/proyecto-2-despues.jpg",
  },
  {
    id: "proyecto-3",
    titulo: "",
    beforeSrc: "/images/galeria/proyecto-3-antes.jpg",
    afterSrc: "/images/galeria/proyecto-3-despues.jpg",
  },
];
