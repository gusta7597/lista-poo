import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";

export default class clienteUnico {
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public selecionar(cpf: string): Cliente {
        const cpfBuscado = new CPF('', new Date());
        let clienteSelecionado: Cliente | undefined;

        this.clientes.forEach(cliente => {
            if (cpf === cliente.getCpf.getValor) {
                clienteSelecionado = cliente;
            }
        });

        if (!clienteSelecionado) {
            throw new Error('Cliente não encontrado.');
        }

        return clienteSelecionado;
    }
}