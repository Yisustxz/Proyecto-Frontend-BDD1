import axios from "axios";
import { apiUrl } from "../config";

const BASE_URL = apiUrl + "/Descuentos";

export const getDescuentos = async (page = 0, size = 4) => {
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
          "Error al obtener los descuentos del backend"
      );
    }
    throw error;
  }
};

export const getDescuentoById = async (porcentaje) => {
  try {
    const res = await axios.get(BASE_URL + `/${porcentaje}`);
    if (!res.data.item || !res.data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al obtener el descuento"
      );
    }
    throw error;
  }
};

export const deleteDescuento = async (porcentaje) => {
  try {
    const res = await axios.delete(BASE_URL + "/" + porcentaje);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al eliminar el descuento"
      );
    }
    throw error;
  }
};

export const createDescuento = async (descuento) => {
  try {
    const res = await axios.post(BASE_URL, descuento);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }

    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al crear el descuento"
      );
    }
    throw error;
  }
};

export const updateDescuento = async (descuento, porcentaje) => {
  try {
    const res = await axios.put(BASE_URL + "/" + porcentaje, descuento);
    if (!res.data.item || !res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al editar el descuento"
      );
    }
    throw error;
  }
};
