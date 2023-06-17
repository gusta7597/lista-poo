import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private listaClientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(listaClientes: Array<Cliente>) {
        super();
        this.listaClientes = listaClientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let nomeCliente = this.entrada.receberTexto(`Digite o nome do cliente: `);
        let nomeSocialCliente = this.entrada.receberTexto(`Digite o nome social do cliente: `);
        let cpfCliente = this.entrada.receberTexto(`Digite o CPF do cliente (formato: xxx.xxx.xxx-xx): `);
        let dataCliente = this.entrada.receberTexto(`Digite a data(formato: dd/mm/aaaa): `);

        let partesCpf = cpfCliente.split('.');
        let cpfFormatado = partesCpf.join('');
        let partesData = dataCliente.split('/');
        let dia = parseInt(partesData[0]);
        let mes = parseInt(partesData[1]) - 1;
        let ano = parseInt(partesData[2]);

        let dataNascimento = new Date(ano, mes, dia);
        let cpf = new CPF(cpfFormatado, dataNascimento);

        let cliente = new Cliente(nomeCliente, nomeSocialCliente, cpf);
        this.listaClientes.push(cliente);

        console.log(`\nCliente cadastrado com sucesso!`);
        console.log(`Nome do cliente: ${cliente.nome}`);
        console.log(`Nome social do cliente: ${cliente.nomeSocial}`);
        console.log(`CPF do cliente: ${cliente.getCpf}`);
    }
}