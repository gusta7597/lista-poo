import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";

export default function cadastrarRG(cliente: Cliente) {
    let entrada = new Entrada();

    let numeroRG = entrada.receberTexto(`Digite o número do RG: `);
    let dataEmissaoRG = entrada.receberTexto(`Digite a data de emissão do RG no formato dd/mm/yyyy: `);

    let partesData = dataEmissaoRG.split('/');
    let dia = new Number(partesData[0]).valueOf();
    let mes = new Number(partesData[1]).valueOf();
    let ano = new Number(partesData[2]).valueOf();

    let dataEmissao = new Date(ano, mes - 1, dia);
    let rg = new RG(numeroRG, dataEmissao);
    cliente.adicionarRG(rg);

    console.log(`\nRG cadastrado com sucesso para o cliente ${cliente.nome}.`);
}