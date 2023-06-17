import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private listaServicos: Array<Servico>;
    private entradaUsuario: Entrada;

    constructor(listaServicos: Array<Servico>) {
        super();
        this.listaServicos = listaServicos;
        this.entradaUsuario = new Entrada();
    }

    public cadastrar(): void {
        let nomeServico = this.entradaUsuario.receberTexto('Digite o nome do serviço: ');
        let precoServico = this.entradaUsuario.receberNumero('Digite o preço do serviço: ');
        let servico = new Servico();

        servico.nome = nomeServico;
        servico.preco = precoServico;
        
        this.listaServicos.push(servico);
        
        console.log(`\nCadastro concluído com sucesso :)`);
    }
}