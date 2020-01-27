import { MOSTRAR_PRODUCTOS, MOSTRAR_PRODUCTO, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, EDITAR_PRODUCTO } from './types';
import axios from 'axios';

//  When working with APIs and reducers it's in the actions where the API call is made

export const mostrarProductos = () =>  async (dispatch) => {
  const respuesta = await axios.get('http://192.168.0.55:5000/productos');
  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  })
}

export const mostrarProducto = (id) =>  async (dispatch) => {
  const respuesta = await axios.get(`http://192.168.0.55:5000/productos/${id}`);
  dispatch({
    type: MOSTRAR_PRODUCTO,
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

export const agregarProducto = producto => async (dispatch) => {
  const respuesta = await axios.post('http://192.168.0.55:5000/productos', producto);
  dispatch({
    type: AGREGAR_PRODUCTO,
    payload: respuesta.data
  })
}

export const editarProducto = producto => async (dispatch) => {
  const respuesta = await axios.put(`http://192.168.0.55:5000/productos/${producto.id}`, producto);
  dispatch({
    type: EDITAR_PRODUCTO,
    payload: respuesta.data
  })
}
