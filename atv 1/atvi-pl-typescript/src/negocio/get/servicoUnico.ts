import Servico from "../../modelo/servico";

export default class servicoUnico {
    private servicos: Array<Servico>;
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
    }

    public selecionar(nome: string): Servico {
        let servicoSelecionado: Servico | undefined;

        this.servicos.forEach(servico => {
            if (nome === servico.nome) {
                servicoSelecionado = servico;
            }
        });

        if (!servicoSelecionado) {
            throw new Error('Serviço não encontrado.');
        }

        return servicoSelecionado;
    }
}