import UsuarioService from "../../services/UsuarioService";

class CadastroUsuarioManager{
    async cadastrarUsuario(usuario){
        return await InstituicaoService.CadastrarInstituicao(usuario).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CadastroUsuarioManager();