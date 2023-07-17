import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Encargado'

export const getEncargado = async (page = 0, size = 4) => {
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
          'Error al obtener el encargado del backend'
      )
    }
    throw error
  }
}

export const getEncargadoById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el encargado'
      )
    }
    throw error
  }
}

export const deleteEncargado = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el encargado'
      )
    }
    throw error
  }
}

export const createEncargado = async (encargado) => {
  try {
    const res = await axios.post(BASE_URL, encargado)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el encargado'
      )
    }
    throw error
  }
}

export const updateEncargado = async (encargado, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, encargado)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el encargado'
      )
    }
    throw error
  }
}
