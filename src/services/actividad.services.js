import axios from "axios";
import { apiUrl } from "../config";

const BASE_URL = apiUrl + "/Actividades";

export const getActividades = async (page = 0, size = 4) => {
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
          "Error al obtener las actividades del backend"
      );
    }
    throw error;
  }
};

export const getActividadById = async (cod, num) => {
  try {
    const res = await axios.get(BASE_URL + `/${cod}` + `/${num}`);
    if (!res.data.item || !res.data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al obtener la actividad"
      );
    }
    throw error;
  }
};

export const deleteActividad = async (cod, num) => {
  try {
    const res = await axios.delete(BASE_URL + "/" + cod + "/" + num);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al eliminar la actividad"
      );
    }
    throw error;
  }
};

export const createActividad = async (actividad) => {
  try {
    const res = await axios.post(BASE_URL, actividad);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }

    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al crear la actividad"
      );
    }
    throw error;
  }
};

export const updateActividad = async (actividad, cod, num) => {
  try {
    const res = await axios.put(BASE_URL + "/" + cod + "/" + num, actividad);
    if (!res.data.item || !res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al editar la actividad"
      );
    }
    throw error;
  }
};
