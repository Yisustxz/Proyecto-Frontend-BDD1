import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Ciudades'

export const getCiudades = async (page = 0, size = 4) => {
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
          'Error al obtener las ciudades del backend'
      )
    }
    throw error
  }
}

export const getCiudadById = async (cod, num) => {
  try {
    const res = await axios.get(BASE_URL + `/${cod}` + `/${num}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el estado'
      )
    }
    throw error
  }
}

export const deleteCiudad = async (cod, num) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + cod + '/' + num)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar la ciudad'
      )
    }
    throw error
  }
}

export const createCiudad = async (ciudad) => {
  try {
    const res = await axios.post(BASE_URL, ciudad)
    if (!res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear la ciudad'
      )
    }
    throw error
  }
}

export const updateCiudad = async (ciudad, cod, num) => {
  try {
    const res = await axios.put(BASE_URL + '/' + cod + '/' + num, ciudad)
    console.log(res.data)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar la ciudad'
      )
    }
    throw error
  }
}
