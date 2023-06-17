import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";

export default function cadastrarTelefone(cliente: Cliente) {
    let entrada = new Entrada();

    let ddd = entrada.receberTexto(`Digite informe o DDD do telefone: `);
    let numero = entrada.receberTexto(`Digite o número do telefone: `);

    let telefone = new Telefone(ddd, numero);
    cliente.adicionarTelefone(telefone);

    console.log(`\nTelefone cadastrado com sucesso.\n`);
}