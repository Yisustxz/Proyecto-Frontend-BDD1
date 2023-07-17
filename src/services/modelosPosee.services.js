import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/ModelosPosee'

export const getModelosPosee = async (page = 0, size = 4) => {
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
          'Error al obtener el modelo que posee del backend'
      )
    }
    throw error
  }
}

export const getModelosPoseeById = async (id) => {
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
          'Error al obtener el modelo que posee '
      )
    }
    throw error
  }
}

export const deleteModelosPosee = async (id) => {
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
          'Error al eliminar el modelo que posee '
      )
    }
    throw error
  }
}

export const createModelosPosee = async (modeloposee) => {
  try {
    const res = await axios.post(BASE_URL, modeloposee)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el modelo que posee '
      )
    }
    throw error
  }
}
