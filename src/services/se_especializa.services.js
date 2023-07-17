import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Especializaciones'

export const getEspecializaciones = async (page = 0, size = 4) => {
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
          'Error al obtener las especializaciones del backend'
      )
    }
    throw error
  }
}

export const getEspecializacionById = async (id, cod) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}` + `/${cod}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener la especializacion'
      )
    }
    throw error
  }
}

export const deleteEspecializacion = async (id, cod) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id + '/' + cod)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar la especializacion'
      )
    }
    throw error
  }
}

export const createEspecializacion = async (especializacion) => {
  try {
    const res = await axios.post(BASE_URL, especializacion)
    if (!res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear la especializacion'
      )
    }
    throw error
  }
}
