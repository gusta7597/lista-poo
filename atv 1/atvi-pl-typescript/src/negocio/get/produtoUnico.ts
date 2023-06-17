import Produto from "../../modelo/produto";

export default class ProdutoUnico {
    private produtos: Array<Produto>;
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
    }

    public selecionar(nome: string): Produto {
        let produtoSelecionado: Produto | undefined;

        this.produtos.forEach(produto => {
            if (nome === produto.nome) {
                produtoSelecionado = produto;
            }
        });

        if (!produtoSelecionado) {
            throw new Error('Produto não encontrado.');
        }

        return produtoSelecionado;
    }
}