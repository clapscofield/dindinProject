import axios from "axios";

const API_URL = "http://localhost:7000/api/auth/";

class AuthService {
  login(usuario, senha) {
    return axios
      .post(API_URL + "signin", { usuario, senha })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(usuario) {
    return axios.post(API_URL + "signup", {
        usuario: usuario.usuario,
        senha: usuario.senha,
        email: usuario.email,
        nome: usuario.nome,
        descricao: usuario.descricao 
    });
  }
}

export default new AuthService();