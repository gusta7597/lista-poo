import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    public quantidadeTotalConsumida: number
    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.quantidadeTotalConsumida = 0
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getProdutosConsumidos(){return this.produtosConsumidos}
    public get getServicosConsumidos(){return this.servicosConsumidos}

    public setNome(nome: string) {
        this.nome = nome
    }

    public setTipo(tipo: string) {
        this.tipo = tipo
    }

    public setRaca(raca: string) {
        this.raca = raca
    }

    public setGenero(genero: string) {
        this.genero = genero
    }

    public consumirProduto(produto: Produto) {
        this.produtosConsumidos.push(produto)
    }

    public atribuirServico(servico: Servico) {
        this.servicosConsumidos.push(servico)
    } 
}