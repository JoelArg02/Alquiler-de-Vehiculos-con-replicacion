import axios from "axios";
import apiConfig from "./apiConfig";

let carData = []; 

const getCarData = async () => {
  try {
    const response = await axios.get(`${apiConfig.baseURL}/v1/vehiculos/`);
    console.log("Se hizo el intento");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de los vehículos:", error);
    throw error;
  }
};

const mapDataToCarData = (apiData) => {
  return apiData.map((item) => ({
    id: item.id_vehiculo,
    brand: "Marca no especificada",
    rating: parseFloat(item.rating_vehiculo),
    agencia: item.nombre_agencia,
    carName: item.nombre_vehiculo,
    imgUrl: item.imagen_vehiculo,
    model: item.modelo_vehiculo,
    price: parseFloat(item.precio_vehiculo),
    speed: `${item.kilometraje_vehiculo}km`,
    gps: "Navegación GPS",
    seatType: "Asientos calefactados",
    automatic: item.transmision_vehiculo === "Automática" ? "Automático" : "Manual",
    description: item.descripcion_vehiculo,
  }));
};

(async () => {
  try {
    const data = await getCarData();
    const processedData = mapDataToCarData(data);
    carData.splice(0, carData.length, ...processedData); // Actualiza carData con los nuevos datos
    console.log("Datos de vehículos actualizados con éxito:", carData);
  } catch (error) {
    console.error("Error al actualizar los datos de los vehículos:", error);
  }
})();

export default carData;
