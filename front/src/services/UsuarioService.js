import axios from "axios";

class UsuarioService {
    async CadastrarUsuario(usuario){
        return await axios.post("http://localhost:7000/usuario/add", {
            usuario: usuario.usuario,
            senha: usuario.senha,
            email: usuario.email,
            nome: usuario.nome,
            descricao: usuario.descricao 
        });
    }
}

export default new UsuarioService();