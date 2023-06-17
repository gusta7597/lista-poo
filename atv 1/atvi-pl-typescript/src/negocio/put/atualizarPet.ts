import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";

export default class UpdatePet {
    private entradaUsuario: Entrada;

    constructor() {
        this.entradaUsuario = new Entrada();
    }

    public editar(pet: Pet): void {
        console.log('O que deseja editar?');
        console.log('1 - Nome');
        console.log('2 - Tipo');
        console.log('3 - Raça');
        console.log('4 - Gênero');

        let escolha = this.entradaUsuario.receberNumero('\nDigite o número da opção desejada: ');

        switch (escolha) {
            case 1:
                let novoNome = this.entradaUsuario.receberTexto(`Por favor, informe o novo nome do Pet: `);
                pet.setNome(novoNome);
                console.log(`\nEdição do nome concluída.\n`);
                break;

            case 2:
                let novoTipo = this.entradaUsuario.receberTexto(`Por favor, informe o novo tipo do Pet: `);
                pet.setTipo(novoTipo);
                console.log(`\nEdição do tipo concluída.\n`);
                break;

            case 3:
                let novaRaca = this.entradaUsuario.receberTexto(`Por favor, informe a nova raça do Pet: `);
                pet.setRaca(novaRaca);
                console.log(`\nEdição da raça concluída.\n`);
                break;

            case 4:
                let novoGenero = this.entradaUsuario.receberTexto(`Por favor, informe o novo gênero do Pet: `);
                pet.setGenero(novoGenero);
                console.log(`\nEdição do gênero concluída.\n`);
                break;

            default:
                console.log('Opção inválida. Nenhuma edição realizada.\n');
                break;
        }
    }
}
