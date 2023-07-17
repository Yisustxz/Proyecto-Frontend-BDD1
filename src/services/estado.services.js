import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Estados'

export const getEstado = async (page = 0, size = 4) => {
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
          'Error al obtener los estados del backend'
      )
    }
    throw error
  }
}

export const getEstadoById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el estado'
      )
    }
    throw error
  }
}

export const deleteEstado = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el estado'
      )
    }
    throw error
  }
}

export const createEstado = async (estado) => {
  try {
    const res = await axios.post(BASE_URL, estado)
    if (!res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el estado'
      )
    }
    throw error
  }
}

export const updateEstado = async (estado, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, estado)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el estado'
      )
    }
    throw error
  }
}
