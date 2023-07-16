import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Vehiculos'

export const getVehiculos = async (page = 0, size = 4) => {
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
          'Error al obtener el vehiculo del backend'
      )
    }
    throw error
  }
}

export const getVehiculoById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error('No se han recibido bien los datos del servidor :(')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el vehiculo'
      )
    }
    throw error
  }
}

export const deleteVehiculo = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el vehiculo'
      )
    }
    throw error
  }
}

export const createVehiculo = async (vehiculo) => {
  try {
    const res = await axios.post(BASE_URL, vehiculo)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el Vehiculo'
      )
    }
    throw error
  }
}

export const updateVehiculo = async (vehiculo, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, vehiculo)
    if (!res.data.item || !res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el vehiculo'
      )
    }
    throw error
  }
}
