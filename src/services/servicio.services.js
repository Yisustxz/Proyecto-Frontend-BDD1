import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Servicios'

export const getServicios = async (page = 0, size = 4) => {
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
          'Error al obtener los servicios del backend'
      )
    }
    throw error
  }
}

export const getServicioById = async (cod) => {
  try {
    const res = await axios.get(BASE_URL + `/${cod}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el servicio'
      )
    }
    throw error
  }
}

export const deleteServicio = async (cod) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + cod)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el servicio'
      )
    }
    throw error
  }
}

export const createServicio = async (servicio) => {
  try {
    const res = await axios.post(BASE_URL, servicio)
    if (!res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el servicio'
      )
    }
    throw error
  }
}

export const updateServicio = async (servicio, cod) => {
  try {
    const res = await axios.put(BASE_URL + '/' + cod, servicio)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el servicio'
      )
    }
    throw error
  }
}
