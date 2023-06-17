import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }

    public adicionarPet(pet: Pet){
        this.pets.push(pet)
    }
    public removerPet(pet: Pet) {
        const index = this.pets.indexOf(pet)
        if (index !== -1) {
            this.pets.splice(index, 1)
        }
    }
    public adicionarRG(rg: RG) {
        this.rgs.push(rg)
    }

    public removerRG(rg: RG) {
        const index = this.rgs.indexOf(rg)
        if (index !== -1) {
            this.rgs.splice(index, 1)
        }
    }

    public adicionarTelefone(telefone: Telefone) {
        this.telefones.push(telefone)
    }

    public removerTelefone(telefone: Telefone) {
        const index = this.telefones.indexOf(telefone)
        if (index !== -1) {
            this.telefones.splice(index, 1)
        }
    }

    public consumirProduto(produto: Produto) {
        this.produtosConsumidos.push(produto)
    }

    public atribuirServico(servico: Servico) {
        this.servicosConsumidos.push(servico)
    }
}