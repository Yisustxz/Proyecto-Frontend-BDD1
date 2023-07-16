import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Trabajador'

export const getTrabajador = async (page = 0, size = 4) => {
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
          'Error al obtener el trabajador del backend'
      )
    }
    throw error
  }
}

export const getTrabajadorById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error('No se han recibido bien los datos del servidor :(')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el trabajador'
      )
    }
    throw error
  }
}

export const deleteTrabajador = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el trabajador'
      )
    }
    throw error
  }
}

export const createTrabajador = async (trabajador) => {
  try {
    const res = await axios.post(BASE_URL, trabajador)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el trabajador'
      )
    }
    throw error
  }
}

export const updateTrabajador = async (trabajador, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, trabajador)
    if (!res.data.item || !res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el trabajador'
      )
    }
    throw error
  }
}
