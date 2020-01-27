import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO } from './types';
import axios from 'axios';

//  When working with APIs and reducers it's in the actions where the API call is made

export const mostrarProductos = () =>  async (dispatch) => {
  const respuesta = await axios.get('http://192.168.0.55:5000/productos');
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  })
}

export const borrarProducto = id => async (dispatch) => {
  await axios.delete(`http://192.168.0.55:5000/productos/${id}`);
  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: id
  })
}

export const agregarProducto = post => async (dispatch) => {
  const respuesta = await axios.post('http://192.168.0.55:5000/productos', post);
  dispatch({
    type: AGREGAR_PRODUCTO,
    payload: respuesta.data
  })
}
