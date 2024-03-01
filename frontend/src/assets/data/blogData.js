// importación de imágenes desde el directorio all-images/blog-img
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "La mejor manera de conducir autos",
    author: "Muhib",
    date: "12 Dic, 2020",
    time: "9pm",
    imgUrl: img01,
    description: "Conducir de manera eficiente no solo se trata de velocidad, sino de conocer tu vehículo y el camino. Este artículo te guiará a través de técnicas de conducción avanzadas que mejoran la seguridad y el disfrute. Descubre cómo manejar tu auto de forma óptima en diferentes condiciones y cómo la tecnología moderna puede asistir en tu viaje.",
    quote: "La conducción eficiente es el equilibrio perfecto entre velocidad, seguridad y disfrute. Aprende a dominar el arte de conducir.",
  },

  {
    id: 2,
    title: "Qué hacer si la batería de tu auto se agota",
    author: "Muhib",
    date: "12 Dic, 2020",
    time: "9pm",
    imgUrl: img02,
    description: "Una batería agotada puede ser un contratiempo importante, pero no tiene que arruinar tu día. Exploramos soluciones rápidas y preventivas para este problema común, incluyendo cómo arrancar tu auto con cables de puente y cómo mantener tu batería en buen estado para evitar futuras fallas.",
    quote: "Prevenir es mejor que curar, especialmente cuando se trata de la batería de tu auto. Descubre cómo mantenerla en óptimas condiciones.",
  },

  {
    id: 3,
    title: "La mejor manera de planificar un viaje",
    author: "Muhib",
    date: "12 Dic, 2020",
    time: "9pm",
    imgUrl: img03,
    description: "Planificar un viaje puede ser abrumador, pero con los consejos correctos, puedes convertirlo en una experiencia inolvidable. Desde la elección de destinos hasta el embalaje eficiente y la navegación en ruta, cubrimos todo lo que necesitas saber para tu próxima aventura sobre ruedas.",
    quote: "Un buen viaje comienza con una gran planificación. Descubre cómo hacer de tu próxima escapada una experiencia perfecta.",
  },
];

export default blogData;
