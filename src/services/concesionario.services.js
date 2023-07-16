import axios from "axios";
import { apiUrl } from "../config";

const BASE_URL = apiUrl + "/Concesionarios";

export const getConcesionarios = async (page = 0, size = 4) => {
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
          "Error al obtener los concesionarios del backend"
      );
    }
    throw error;
  }
};

export const getConcesionarioById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`);
    if (!res.data.item || !res.data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al obtener el concesionario"
      );
    }
    throw error;
  }
};

export const deleteConcesionario = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + "/" + id);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al eliminar el concesionario"
      );
    }
    throw error;
  }
};

export const createConcesionario = async (concesionario) => {
  try {
    const res = await axios.post(BASE_URL, concesionario);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }

    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al crear el concesionario"
      );
    }
    throw error;
  }
};

export const updateConcesionario = async (concesionario, id) => {
  try {
    const res = await axios.put(BASE_URL + "/" + id, concesionario);
    if (!res.data.item || !res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al editar el concesionario"
      );
    }
    throw error;
  }
};
