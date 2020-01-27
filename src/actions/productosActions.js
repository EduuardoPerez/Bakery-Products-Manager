import { MOSTRAR_PRODUCTOS } from './types';
import axios from 'axios';

export const mostrarProductos = async (dispatch) => {
  const respuesta = await axios.get('http://192.168.0.55:5000/productos');
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  })
}
