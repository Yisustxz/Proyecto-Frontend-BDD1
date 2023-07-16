import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Modelos'

export const getModelos = async (page = 0, size = 4) => {
  try {
    const res = await axios.get(BASE_URL + '?size=' + size + '&page=' + page)
    if (!res.data.items || !res.data.success) {
      throw new Error('No se han recibido bien los datos del servidor :(')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al obtener el modelo del backend'
      )
    }
    throw error
  }
}

export const getModeloById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error('No se han recibido bien los datos del servidor :(')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el modelo'
      )
    }
    throw error
  }
}

export const deleteModelo = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el modelo'
      )
    }
    throw error
  }
}

export const createModelo = async (modelo) => {
  try {
    const res = await axios.post(BASE_URL, modelo)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el modelo'
      )
    }
    throw error
  }
}

export const updateModelo = async (modelo, id) => {
  try {
    console.log(modelo)
    const res = await axios.put(BASE_URL + '/' + id, modelo)
    if (!res.data.item || !res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el modelo'
      )
    }
    throw error
  }
}
