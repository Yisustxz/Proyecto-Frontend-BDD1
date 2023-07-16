import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Reservas'

export const getReserva = async (page = 0, size = 4) => {
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
          'Error al obtener la reserva del backend'
      )
    }
    throw error
  }
}

export const getReservaById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error('No se han recibido bien los datos del servidor :(')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener la reserva'
      )
    }
    throw error
  }
}

export const deleteReserva = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar la reserva'
      )
    }
    throw error
  }
}

export const createReserva = async (reserva) => {
  try {
    const res = await axios.post(BASE_URL, reserva)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear la reserva'
      )
    }
    throw error
  }
}

export const updateReserva = async (reserva, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, reserva)
    if (!res.data.item || !res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar la reserva'
      )
    }
    throw error
  }
}
