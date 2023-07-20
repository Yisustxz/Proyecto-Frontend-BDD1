import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Estadisticas/ClientesFrecuentes'

export const getClienteFrecuente = async (cliente) => {
  try {
    const res = await axios.get(BASE_URL, cliente)
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
