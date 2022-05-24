import { INSERIR_GANHO, INSERIR_GASTO } from '../types';

  export const initialState = {
    gasto: {},
    ganho: {}
  }
  
  export default function ganhoGastoReducer(state = initialState, action) {
    switch (action.type) {
      case INSERIR_GASTO: {
        return {
          ...state,
          gasto: action.payload,
        }
      }
      case INSERIR_GANHO: {
        return {
          ...state,
          ganho: action.payload,
        }
      }
      default:
        return state
    }
  }
  