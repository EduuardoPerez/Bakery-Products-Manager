import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO } from '../actions/types';

// Each reducer has its own state

const initialState = {
  productos: []
}

export default function (state=initialState, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return {
        ...state,
        productos: action.payload
      }
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter (producto => producto.id !== action.payload )
      }
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      }
    default:
      return state;
  }
}
