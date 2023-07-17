import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/FamiliaProductos'

export const getFamiliaProducto = async (page = 0, size = 4) => {
  try {
    const res = await axios.get(BASE_URL + '?size=' + size + '&page=' + page)
    if (!res.data.items || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al obtener la familia de producto del backend'
      )
    }
    throw error
  }
}

export const getFamiliaProductoById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al obtener la familia de producto'
      )
    }
    throw error
  }
}

export const deleteFamiliaProducto = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al eliminar la Familia de producto'
      )
    }
    throw error
  }
}

export const createFamiliaProducto = async (familiaProducto) => {
  try {
    const res = await axios.post(BASE_URL, familiaProducto)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al crear la familia de producto'
      )
    }
    throw error
  }
}

export const updateFamiliaProducto = async (familiaProducto, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, familiaProducto)
    if (!res.data.message || !res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al editar la Familia de producto'
      )
    }
    throw error
  }
}
