import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Clientes'

export const getCliente = async (page = 0, size = 4) => {
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
          'Error al obtener el cliente del backend'
      )
    }
    throw error
  }
}

export const getClienteById = async (id) => {
  try {
    const res = await axios.get(BASE_URL + `/${id}`)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al obtener el cliente'
      )
    }
    throw error
  }
}

export const deleteCliente = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + '/' + id)
    if (!res.data.success) {
      throw new Error(res.data)
    }
    return res.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al eliminar el cliente'
      )
    }
    throw error
  }
}

export const createCliente = async (cliente) => {
  try {
    const res = await axios.post(BASE_URL, cliente)
    if (!res.data.success) {
      console.log(res.data)
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    console.log(error)
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al crear el cliente'
      )
    }
    throw error
  }
}

export const updateCliente = async (cliente, id) => {
  try {
    const res = await axios.put(BASE_URL + '/' + id, cliente)
    if (!res.data.item || !res.data.success) {
      throw new Error(res.data)
    }

    return res
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || 'Error al editar el cliente'
      )
    }
    throw error
  }
}
