export type Fase = 1 | 2 | 3;

export interface Localidad {
  slug: string;
  nombre: string;
  zona: string;
  fase: Fase;
  poblacionAprox: string;
  barrios: string[];
  intro: string;
}

export const localidades: Localidad[] = [
  {
    slug: "suba",
    nombre: "Suba",
    zona: "Norte",
    fase: 1,
    poblacionAprox: "más de 1 millón de habitantes",
    barrios: ["Niza", "Suba Rincón", "La Gaitana", "Tibabuyes", "Britalia"],
    intro:
      "Suba es la localidad más extensa y poblada de Bogotá, con una mezcla de conjuntos residenciales, casas familiares y zonas comerciales que van desde Niza hasta Tibabuyes.",
  },
  {
    slug: "usaquen",
    nombre: "Usaquén",
    zona: "Norte",
    fase: 1,
    poblacionAprox: "más de 500.000 habitantes",
    barrios: ["Santa Bárbara", "Cedritos", "Country Club", "San Cristóbal Norte"],
    intro:
      "Usaquén combina casas tradicionales con edificios de estratos altos, donde las remodelaciones interiores y el mantenimiento de fachadas son constantes.",
  },
  {
    slug: "engativa",
    nombre: "Engativá",
    zona: "Occidente",
    fase: 1,
    poblacionAprox: "más de 800.000 habitantes",
    barrios: ["Las Ferias", "Bolivia", "Álamos", "Minuto de Dios"],
    intro:
      "Engativá es una de las localidades con más casas familiares de Bogotá, con Las Ferias como su centro comercial y social.",
  },
  {
    slug: "fontibon",
    nombre: "Fontibón",
    zona: "Occidente",
    fase: 1,
    poblacionAprox: "más de 400.000 habitantes",
    barrios: ["Modelia", "Ciudad Salitre", "Capellanía", "Zona Franca"],
    intro:
      "Fontibón crece rápido cerca del Aeropuerto El Dorado, con proyectos residenciales nuevos y casas de barrios tradicionales que buscan renovación.",
  },
  {
    slug: "chapinero",
    nombre: "Chapinero",
    zona: "Centro-Norte",
    fase: 1,
    poblacionAprox: "cerca de 140.000 habitantes",
    barrios: ["El Chicó", "Quinta Camacho", "El Refugio", "Chapinero Alto"],
    intro:
      "Chapinero mezcla apartamentos de estrato alto con casas patrimoniales, donde las remodelaciones de interiores son frecuentes.",
  },
  {
    slug: "kennedy",
    nombre: "Kennedy",
    zona: "Suroccidente",
    fase: 2,
    poblacionAprox: "más de 1 millón de habitantes",
    barrios: ["Tintal", "Castilla", "Bavaria", "Timiza"],
    intro:
      "Kennedy es una de las localidades más grandes de Bogotá, con miles de casas familiares en barrios como Castilla y Tintal.",
  },
  {
    slug: "teusaquillo",
    nombre: "Teusaquillo",
    zona: "Centro-Occidente",
    fase: 2,
    poblacionAprox: "más de 150.000 habitantes",
    barrios: ["La Soledad", "Galerías", "Palermo", "Parque Simón Bolívar"],
    intro:
      "Teusaquillo es reconocida por sus casas de arquitectura republicana y apartamentos de mediana altura cerca del Parque Simón Bolívar.",
  },
  {
    slug: "barrios-unidos",
    nombre: "Barrios Unidos",
    zona: "Centro",
    fase: 2,
    poblacionAprox: "más de 250.000 habitantes",
    barrios: ["Doce de Octubre", "Los Andes", "La Castellana"],
    intro:
      "Barrios Unidos tiene un buen equilibrio entre casas familiares y edificios de altura media, con alta rotación de remodelaciones.",
  },
  {
    slug: "bosa",
    nombre: "Bosa",
    zona: "Suroccidente",
    fase: 2,
    poblacionAprox: "más de 680.000 habitantes",
    barrios: ["Bosa Centro", "El Recreo", "Porvenir", "San Bernardino"],
    intro:
      "Bosa es una localidad de crecimiento constante, con conjuntos residenciales nuevos y casas tradicionales que necesitan mantenimiento.",
  },
  {
    slug: "puente-aranda",
    nombre: "Puente Aranda",
    zona: "Centro-Occidente",
    fase: 2,
    poblacionAprox: "más de 200.000 habitantes",
    barrios: ["Ciudad Montes", "Muzú", "Zona Industrial"],
    intro:
      "Puente Aranda combina zonas residenciales e industriales, con casas de mitad de siglo que suelen requerir pintura de mantenimiento.",
  },
  {
    slug: "san-cristobal",
    nombre: "San Cristóbal",
    zona: "Suroriente",
    fase: 3,
    poblacionAprox: "más de 400.000 habitantes",
    barrios: ["San Blas", "La Victoria", "20 de Julio"],
    intro:
      "San Cristóbal es una localidad de casas familiares en las faldas de los cerros orientales, con fuerte tradición de trabajos por encargo.",
  },
  {
    slug: "rafael-uribe-uribe",
    nombre: "Rafael Uribe Uribe",
    zona: "Suroriente",
    fase: 3,
    poblacionAprox: "más de 350.000 habitantes",
    barrios: ["Marco Fidel Suárez", "Quiroga", "San José Sur"],
    intro:
      "Rafael Uribe Uribe tiene un tejido de casas familiares consolidadas, muchas con más de una generación viviendo en la misma propiedad.",
  },
  {
    slug: "ciudad-bolivar",
    nombre: "Ciudad Bolívar",
    zona: "Sur",
    fase: 3,
    poblacionAprox: "más de 700.000 habitantes",
    barrios: ["Lucero", "El Tesoro", "Jerusalén"],
    intro:
      "Ciudad Bolívar es una de las localidades más grandes en población, con alta demanda de mantenimiento y pintura de vivienda propia.",
  },
  {
    slug: "usme",
    nombre: "Usme",
    zona: "Sur",
    fase: 3,
    poblacionAprox: "más de 450.000 habitantes",
    barrios: ["Alfonso López", "La Aurora", "Ciudad Usme"],
    intro:
      "Usme sigue creciendo hacia el sur de Bogotá, con viviendas familiares que se van completando y remodelando por etapas.",
  },
  {
    slug: "tunjuelito",
    nombre: "Tunjuelito",
    zona: "Sur",
    fase: 3,
    poblacionAprox: "más de 200.000 habitantes",
    barrios: ["Venecia", "El Tunal", "San Carlos"],
    intro:
      "Tunjuelito es una localidad compacta de casas familiares alrededor del Parque El Tunal.",
  },
  {
    slug: "santa-fe",
    nombre: "Santa Fe",
    zona: "Centro",
    fase: 3,
    poblacionAprox: "más de 100.000 habitantes",
    barrios: ["La Macarena", "Las Nieves", "Veraguas"],
    intro:
      "Santa Fe combina el centro histórico con barrios residenciales tradicionales que conservan fachadas antiguas.",
  },
  {
    slug: "los-martires",
    nombre: "Los Mártires",
    zona: "Centro",
    fase: 3,
    poblacionAprox: "más de 90.000 habitantes",
    barrios: ["La Favorita", "Santa Isabel", "El Listón"],
    intro:
      "Los Mártires tiene edificaciones de mitad de siglo cerca del centro de Bogotá, muchas en proceso de renovación.",
  },
  {
    slug: "antonio-narino",
    nombre: "Antonio Nariño",
    zona: "Centro-Sur",
    fase: 3,
    poblacionAprox: "cerca de 100.000 habitantes",
    barrios: ["Restrepo", "Ciudad Jardín", "Sevilla"],
    intro:
      "Antonio Nariño es una localidad pequeña y consolidada, con casas familiares alrededor del sector de Restrepo.",
  },
  {
    slug: "la-candelaria",
    nombre: "La Candelaria",
    zona: "Centro",
    fase: 3,
    poblacionAprox: "cerca de 25.000 habitantes",
    barrios: ["Centro Histórico", "Egipto", "Belén"],
    intro:
      "La Candelaria conserva casas coloniales y republicanas en el centro histórico de Bogotá, donde el mantenimiento de fachadas es constante.",
  },
];

export function getLocalidadPorSlug(slug: string): Localidad | undefined {
  return localidades.find((l) => l.slug === slug);
}

export function getLocalidadesPorFase(fase: Fase): Localidad[] {
  return localidades.filter((l) => l.fase === fase);
}
