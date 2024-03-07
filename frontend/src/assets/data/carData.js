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


export default carData;
