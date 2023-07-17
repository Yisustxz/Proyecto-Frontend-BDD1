import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Pagos'

export const getPagos = async (page = 0, size = 4) => {
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
          'Error al obtener los pagos del backend'
      )
    }
    throw error
  }
}

export const getPagoById = async (cod, num) => {
  try {
    const res = await axios.get(BASE_URL + `/${cod}` + `/${num}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el pago'
      )
    }
    throw error
  }
}

export const deletePago = async (cod, num) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + cod + '/' + num)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el pago'
      )
    }
    throw error
  }
}

export const createPago = async (pago) => {
  try {
    const res = await axios.post(BASE_URL, pago)
    if (!res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el pago'
      )
    }
    throw error
  }
}

export const updatePago = async (pago, cod, num) => {
  try {
    const res = await axios.put(BASE_URL + '/' + cod + '/' + num, pago)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el pago'
      )
    }
    throw error
  }
}
