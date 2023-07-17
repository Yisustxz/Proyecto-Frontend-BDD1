import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/OrdenesServicio'

export const getOrdenesServicio = async (page = 0, size = 4) => {
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
          'Error al obtener la orden de servicio del backend'
      )
    }
    throw error
  }
}

export const getOrdenesServicioById = async (id) => {
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
          'Error al obtener la orden de servicio'
      )
    }
    throw error
  }
}

export const deleteOrdenesServicio = async (id) => {
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
          'Error al eliminar la orden de servicio'
      )
    }
    throw error
  }
}

export const createOrdenServicio = async (ordenServicio) => {
  try {
    const res = await axios.post(BASE_URL, ordenServicio)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear la orden de servicio'
      )
    }
    throw error
  }
}

export const updateOrdenServicio = async (ordenServicio, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, ordenServicio)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar la orden de servicio'
      )
    }
    throw error
  }
}
