import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/DetallesServicio'

export const getDetalleServicio = async (page = 0, size = 4) => {
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
          'Error al obtener el detalle de servicio del backend'
      )
    }
    throw error
  }
}

export const getDetalleServicioById = async (id, cod) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}/${cod}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al obtener el detalle de servicio '
      )
    }
    throw error
  }
}

export const deleteDetalleServicio = async (num, detalle) => {
  try {
    const res = await axios.delete(BASE_URL + `/${num}/${detalle}`)
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

export const createDetalleServicio = async (detalleservicio) => {
  try {
    const res = await axios.post(BASE_URL, detalleservicio)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al crear el detalle de servicio '
      )
    }
    throw error
  }
}

export const updateDetalleServicio = async (detalleservicio, id, cod) => {
  try {
    const res = await axios.put(
      BASE_URL + '/' + id + '/' + cod,
      detalleservicio
    )
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al editar el detalle de servicio '
      )
    }
    throw error
  }
}
