import axios from 'axios';

const API_URL = 'http://localhost:8080/api/ordenes';

/**
 * Crear una nueva orden desde el carrito
 */
export const crearOrden = async (ordenRequest) => {
  try {
    console.log('Enviando orden al backend:', ordenRequest);
    const response = await axios.post(API_URL, ordenRequest, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Orden creada exitosamente:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al crear orden:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Obtener todas las órdenes
 */
export const getAllOrdenes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

/**
 * Obtener una orden por ID
 */
export const getOrdenById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

/**
 * Obtener órdenes por estado
 */
export const getOrdenesPorEstado = async (estado) => {
  const response = await axios.get(`${API_URL}?estado=${estado}`);
  return response.data;
};

/**
 * Cambiar el estado de una orden
 */
export const cambiarEstadoOrden = async (id, nuevoEstado) => {
  const response = await axios.patch(`${API_URL}/${id}/estado`, {
    estado: nuevoEstado
  });
  return response.data;
};

/**
 * Obtener estadísticas de órdenes
 */
export const getEstadisticasOrdenes = async () => {
  const response = await axios.get(`${API_URL}/estadisticas`);
  return response.data;
};