import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/ProductosUtilizados'

export const getProductoUtilizado = async (page = 0, size = 4) => {
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
          'Error al obtener el producto utilizado del backend'
      )
    }
    throw error
  }
}

export const getProductoUtilizadoById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error('No se han recibido bien los datos del servidor :(')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al obtener el producto utilizado '
      )
    }
    throw error
  }
}

export const deleteProductoUtilizado = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error('Ha ocurrido un fallo con el backend')
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al eliminar el producto utilizado '
      )
    }
    throw error
  }
}

export const createProductoUtilizado = async (productoutilizado) => {
  try {
    const res = await axios.post(BASE_URL, productoutilizado)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error('Ha ocurrido un fallo con el backend')
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message ||
          'Error al crear el producto utilizado '
      )
    }
    throw error
  }
}
