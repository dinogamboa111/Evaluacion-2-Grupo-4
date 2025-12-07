import axios from 'axios';

const API_URL = 'http://localhost:8080/api/productos';


export const getAllProductos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const getProductosPorCategoria = async (categoria) => {
  const response = await axios.get(`${API_URL}?categoria=${categoria}`);
  return response.data;
};


export const getProductosPorNombre = async (nombre) => {
  const response = await axios.get(`${API_URL}?nombre=${nombre}`);
  return response.data;
};


export const getProductosDisponibles = async () => {
  const response = await axios.get(`${API_URL}?disponibles=true`);
  return response.data;
};
