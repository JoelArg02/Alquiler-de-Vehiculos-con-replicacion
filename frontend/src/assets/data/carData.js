import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

import axios from "axios";
import apiConfig from "./apiConfig";

const getCarData = async () => {
  try {
    const response = await axios.get(`${apiConfig.baseURL}/v1/vehiculos/`);
    console.log("Se hizo el intento");
    return response.data; // Devuelve los datos recibidos de la API
  } catch (error) {
    console.error("Error al obtener los datos de los vehículos:", error);
    throw error;
  }
};

const mapDataToCarData = (apiData) => {
  return apiData.map((item) => ({
    id: item.id_vehiculo,
    brand: "Marca no especificada", // Aquí deberías ajustar según los datos que tengas disponibles
    rating: parseFloat(item.rating_vehiculo),
    carName: item.nombre_vehiculo,
    imgUrl: item.imagen_vehiculo,
    model: item.modelo_vehiculo,
    price: parseFloat(item.precio_vehiculo),
    speed: `${item.kilometraje_vehiculo}km`, // Asumiendo que quieras convertir el kilometraje a una cadena de texto
    gps: "Navegación GPS", // Asumiendo valor estático ya que no está en la data original
    seatType: "Asientos calefactados", // Asumiendo valor estático ya que no está en la data original
    automatic:
      item.transmision_vehiculo === "Automática" ? "Automático" : "Manual", // Ajustar según necesidad
    description: item.descripcion_vehiculo,
  }));
};

getCarData()
  .then((data) => {
    const carData2 = mapDataToCarData(data);
    console.log(carData2);
    console.log("Datos de vehículos procesados con éxito:", carData2);
  })
  .catch((error) => {
    console.error("Error al procesar los datos de los vehículos:", error);
  });


  const carData = [
    {
      id: 1,
      brand: "Tesla",
      rating: 112,
      carName: "Tesla Malibu",
      imgUrl: img01,
      model: "Modelo 3",
      price: 50,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "Explora el futuro de la conducción con el Tesla Malibu. Diseño innovador, tecnología de punta y rendimiento excepcional, listo para llevarte a donde quieras ir con estilo y eficiencia.",
    },
  
    {
      id: 2,
      brand: "Toyota",
      rating: 102,
      carName: "Toyota Aventador",
      imgUrl: img02,
      model: "Modelo-2022",
      price: 50,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "El Toyota Aventador redefine la experiencia al volante con su confort superior y su rendimiento confiable. Perfecto para la ciudad y más allá, descubre la ruta con total seguridad.",
    },
  
    {
      id: 3,
      brand: "BMW",
      rating: 132,
      carName: "BMW X3",
      imgUrl: img03,
      model: "Modelo-2022",
      price: 65,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "Con el BMW X3, el lujo y la potencia se unen para crear una experiencia de conducción sin igual. Equipado con tecnología avanzada y un diseño elegante, está listo para cualquier aventura.",
    },
  
    {
      id: 4,
      brand: "Nissan",
      rating: 102,
      carName: "Nissan Mercielago",
      imgUrl: img04,
      model: "Modelo-2022",
      price: 70,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "Nissan Mercielago, la combinación perfecta de rendimiento y economía. Un vehículo diseñado para el conductor moderno, ofreciendo comodidad, eficiencia y un manejo suave.",
    },
  
    {
      id: 5,
      brand: "Ferrari",
      rating: 94,
      carName: "Ferrari Camry",
      imgUrl: img05,
      model: "Modelo-2022",
      price: 45,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "El Ferrari Camry te invita a vivir la pasión de la velocidad con un toque de elegancia y exclusividad. Un coche que combina rendimiento excepcional con el lujo italiano por excelencia.",
    },
  
    {
      id: 6,
      brand: "Mercedes",
      rating: 119,
      carName: "Mercedes Benz XC90",
      imgUrl: img06,
      model: "Modelo-2022",
      price: 85,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "Mercedes Benz XC90, donde la sofisticación se encuentra con la innovación. Disfruta de una experiencia de conducción superior con tecnología de vanguardia y un confort inigualable.",
    },
  
    {
      id: 7,
      brand: "Audi",
      rating: 82,
      carName: "Audi Fiesta",
      imgUrl: img07,
      model: "Modelo 3",
      price: 50,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "Audi Fiesta, el equilibrio perfecto entre rendimiento y diseño. Un vehículo que ofrece una experiencia de conducción emocionante y segura, ideal para aquellos que valoran la ingeniería alemana.",
    },
  
    {
      id: 8,
      brand: "Colorado",
      rating: 52,
      carName: "Rolls Royce Colorado",
      imgUrl: img08,
      model: "Modelo 3",
      price: 50,
      speed: "20kmpl",
      gps: "Navegación GPS",
      seatType: "Asientos calefactados",
      automatic: "Automático",
      description:
        "Descubre el lujo sin precedentes con el Rolls Royce Colorado. Un vehículo que establece nuevos estándares en comodidad, rendimiento y opulencia, diseñado para quienes buscan lo extraordinario.",
    },
  ];
export default carData;
