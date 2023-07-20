import axios from 'axios'
import { apiUrl } from '../config'

const BASE_URL = apiUrl + '/Estadisticas/ProductoMenor'

export const getVentaProductoMenor = async () => {
  try {
    const res = await axios.get(BASE_URL)
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
