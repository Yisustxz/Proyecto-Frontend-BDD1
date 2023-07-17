import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Facturas'

export const getFacturas = async (page = 0, size = 4) => {
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
          'Error al obtener las facturas del backend'
      )
    }
    throw error
  }
}

export const getFacturaById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener la factura'
      )
    }
    throw error
  }
}

export const deleteFactura = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar la factura'
      )
    }
    throw error
  }
}

export const createFactura = async (factura) => {
  try {
    const res = await axios.post(BASE_URL, factura)
    if (!res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear la factura'
      )
    }
    throw error
  }
}

export const updateFactura = async (factura, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, factura)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar la factura'
      )
    }
    throw error
  }
}
