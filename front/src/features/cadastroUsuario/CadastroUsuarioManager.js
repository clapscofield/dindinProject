import UsuarioService from "../../services/UsuarioService";

class CadastroUsuarioManager{
    async cadastrarUsuario(usuario){
        return await UsuarioService.CadastrarUsuario(usuario).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CadastroUsuarioManager();