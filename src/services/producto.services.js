import axios from "axios";
import { apiUrl } from "../config";

const BASE_URL = apiUrl + "/Productos";

export const getProductos = async (page = 0, size = 4) => {
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
          "Error al obtener los productos del backend"
      );
    }
    throw error;
  }
};

export const getProductoById = async (cod) => {
  try {
    const res = await axios.get(BASE_URL + `/${cod}`);
    if (!res.data.item || !res.data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al obtener el producto"
      );
    }
    throw error;
  }
};

export const deleteProducto = async (cod) => {
  try {
    const res = await axios.delete(BASE_URL + "/" + cod);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al eliminar el producto"
      );
    }
    throw error;
  }
};

export const createProducto = async (producto) => {
  try {
    const res = await axios.post(BASE_URL, producto);
    if (!res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }

    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al crear el producto"
      );
    }
    throw error;
  }
};

export const updateProducto = async (producto, cod) => {
  try {
    const res = await axios.put(BASE_URL + "/" + cod, producto);
    if (!res.data.item || !res.data.success) {
      throw new Error("Ha ocurrido un fallo con el backend");
    }
    return res;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error al editar el producto"
      );
    }
    throw error;
  }
};
