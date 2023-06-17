import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class todosClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            
            let listaPets: Array<string> = [];
            let listaRgs: Array<string> = [];
            let listaTelefones: Array<string> = [];
            let listaProdutosConsumidos: Array<string> = [];
            let listaServicosAtribuidos: Array<string> = [];
            let totalGastoProduto = 0;
            let totalGastoServico = 0;
            
            cliente.getPets.forEach(pet => {
                listaPets.push(pet.getNome);
            });

            cliente.getRgs.forEach(rg => {
                listaRgs.push(rg.getValor);
            });

            cliente.getTelefones.forEach(telefone => {
                const telefoneFormatado = `(${telefone.getDdd}) ${telefone.getNumero}`;
                listaTelefones.push(telefoneFormatado);
            });
            
            cliente.getProdutosConsumidos.forEach(produto => {
                listaProdutosConsumidos.push(produto.nome);
                totalGastoProduto += produto.preco;
            });

            cliente.getServicosConsumidos.forEach(servico => {
                listaServicosAtribuidos.push(servico.nome);
                totalGastoServico += servico.preco;
            });

            console.log(`RGs: ${listaRgs}`);
            console.log(`Telefones: ${listaTelefones}`);
            console.log(`Pets: ${listaPets}`);
            console.log(cliente.getPets[0].getProdutosConsumidos);
            console.log(cliente.getPets[0].getServicosConsumidos);
            console.log(`Produtos consumidos: ${listaProdutosConsumidos}`);
            console.log(`Serviços atribuídos: ${listaServicosAtribuidos}`);
        });
    }
}
