import { MOSTRAR_PRODUCTOS } from '../actions/types';

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
    default:
  }
}
