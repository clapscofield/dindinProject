import * as types from './types';
import AuthService from "../services/AuthService";

export const loginUsuario = (dados) => ({
  type: types.LOGIN,
  payload: dados
})

export const inserirGanho = (entrada) => ({
  type: types.INSERIR_GANHO,
  payload: entrada
})

export const inserirGasto = (saida) => ({
  type: types.INSERIR_GASTO,
  payload: saida
})

/* MESSAGE ACTIONS */

export const setMessage = (message) => ({
  type: types.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: types.CLEAR_MESSAGE,
});



/* LOGIN ACTIONS */ 
export const register = (usuario) => (dispatch) => {
  return AuthService.register(usuario).then(
    (response) => {
      dispatch({
        type: types.REGISTER_SUCCESS,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.REGISTER_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.LOGIN_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: types.LOGOUT,
  });
};