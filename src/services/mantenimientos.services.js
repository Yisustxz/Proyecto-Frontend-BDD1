import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Mantenimientos'

export const getMatenimiento = async (page = 0, size = 4) => {
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
          'Error al obtener el detalle del mantenimiento del backend'
      )
    }
    throw error
  }
}

export const getMantenimientoById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el mantenimiento '
      )
    }
    throw error
  }
}

export const deleteMantenimiento = async (id, cod, num) => {
  try {
    const res = await axios.delete(BASE_URL + `/${id}/${cod}/${num}`)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al eliminar el detalle de servicio '
      )
    }
    throw error
  }
}

export const createMantenimiento = async (mantenimiento) => {
  try {
    const res = await axios.post(BASE_URL, mantenimiento)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el mantenimiento '
      )
    }
    throw error
  }
}
