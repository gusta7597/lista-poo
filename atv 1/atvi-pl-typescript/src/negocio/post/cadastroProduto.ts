import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de um novo produto`);
        
        let nomeProduto = this.entrada.receberTexto('Digite o nome do produto: ');
        let precoProduto = this.entrada.receberNumero('Digite o preço do produto: ');
        
        let novoProduto = new Produto();
        novoProduto.nome = nomeProduto;
        novoProduto.preco = precoProduto;
        
        this.produtos.push(novoProduto);
        
        console.log(`\nProduto cadastrado com sucesso: ${novoProduto.nome}`);
        console.log(`Preço: R$ ${novoProduto.preco.toFixed(2)}\n`);
    }
}