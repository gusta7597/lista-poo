import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class UpdateProduto {
    private entradaUsuario: Entrada;

    constructor() {
        this.entradaUsuario = new Entrada();
    }

    public editar(produto: Produto): void {
        console.log(`\nInício da edição do produto`);
        console.log(`O que deseja editar?`);
        console.log(`1 - Nome`);
        console.log(`2 - Preço`);

        let escolha = this.entradaUsuario.receberNumero(`Digite o número da opção desejada: `);

        switch (escolha) {
            case 1:
                let novoNome = this.entradaUsuario.receberTexto(`Por favor, informe o novo nome do produto: `);
                produto.nome = novoNome;
                console.log(`\nEdição do nome concluída.\n`);
                break;

            case 2:
                let novoPreco = this.entradaUsuario.receberNumero(`Por favor, informe o novo preço do produto: `);
                produto.preco=novoPreco;
                console.log(`\nEdição do preço concluída.\n`);
                break;

            default:
                console.log(`Opção inválida. Nenhuma edição realizada.\n`);
                break;
        }

        console.log(`\nEdição concluída :)\n`);
    }
}