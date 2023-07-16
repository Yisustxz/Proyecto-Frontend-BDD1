import axios from "axios";
import { apiUrl } from "../config";

const BASE_URL = apiUrl + "/MantenimientosRecomendados";

export const getMantenimientosRecomendados = async (page = 0, size = 4) => {
  try {
    const res = await axios.get(BASE_URL + "?size=" + size + "&page=" + page);
    if (!res.data.items || !res.data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          "Error al obtener los mantenimientos recomendados del backend"
      );
    }
    throw error;
  }
};

export const getMantenimientoRcomendadoById = async (id, cod) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}` + `/${cod}`);
    if (!res.data.item || !res.data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          "Error al obtener el mantenimiento recomendado"
      );
    }
    throw error;
  }
};

export const deleteMantenimientoRecomendado = async (mod, cod, kil, time) => {
  try {
    const res = await axios.delete(
      BASE_URL + "/" + mod + "/" + cod + "/" + kil + "/" + time
    );
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          "Error al eliminar el mantenimiento recomendado"
      );
    }
    throw error;
  }
};

export const createMantenimientoRecomendado = async (mantenimiento) => {
  try {
    const res = await axios.post(BASE_URL, mantenimiento);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }

    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          "Error al crear el mantenimiento recomendado"
      );
    }
    throw error;
  }
};
