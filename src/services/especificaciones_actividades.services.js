import axios from "axios";
import { apiUrl } from "../config";

const BASE_URL = apiUrl + "/EspecificacionesActividades";

export const getEspecificacionesActividades = async (page = 0, size = 4) => {
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
          "Error al obtener las especificaciones de la actividad del backend"
      );
    }
    throw error;
  }
};

export const getEspecificacionActividadById = async (
  unic,
  detail,
  cod,
  num
) => {
  try {
    const res = await axios.get(
      BASE_URL + `/${unic}` + `/${detail}` + `/${cod}` + `/${num}`
    );
    if (!res.data.item || !res.data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          "Error al obtener la especificacion de la actividad"
      );
    }
    throw error;
  }
};

export const deleteEspecificacionActividad = async (
  unic,
  detail,
  cod,
  num
) => {
  try {
    const res = await axios.delete(
      BASE_URL + "/" + unic + "/" + detail + "/" + cod + "/" + num
    );
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          "Error al eliminar la especificacion de la actividad"
      );
    }
    throw error;
  }
};

export const createEspecificacionActividad = async (especificacion) => {
  try {
    const res = await axios.post(BASE_URL, especificacion);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }

    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          "Error al crear la especificacion de la actividad"
      );
    }
    throw error;
  }
};
