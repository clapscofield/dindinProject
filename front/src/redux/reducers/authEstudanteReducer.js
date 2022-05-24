// import {
//     LOGIN_SUCCESS_ESTUDANTE,
//     LOGIN_FAIL_ESTUDANTE,
//     LOGOUT_ESTUDANTE,
//   } from "../types";
  
//   const user = JSON.parse(localStorage.getItem("userEstudante"));
  
//   const initialState = user
//     ? { isLoggedInEstudante: true, user }
//     : { isLoggedInEstudante: false, user: null };
  
//   export default function authEstudanteReducer(state = initialState, action){
//     const { type, payload } = action;
  
//     switch (type) {
//       case LOGIN_SUCCESS_ESTUDANTE:
//         return {
//           ...state,
//           isLoggedInEstudante: true,
//           user: payload.user,
//         };
//       case LOGIN_FAIL_ESTUDANTE:
//         return {
//           ...state,
//           isLoggedInEstudante: false,
//           user: null,
//         };
//       case LOGOUT_ESTUDANTE:
//         return {
//           ...state,
//           isLoggedInEstudante: false,
//           user: null,
//         };
//       default:
//         return state;
//     }
//   }