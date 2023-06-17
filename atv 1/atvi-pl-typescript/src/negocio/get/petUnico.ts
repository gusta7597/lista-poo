import Pet from "../../modelo/pet";

export default class petUnico {
    private pets: Array<Pet>;
    constructor(pets: Array<Pet>) {
        this.pets = pets;
    }

    public selecionar(nome: string): Pet {
        let petSelecionado: Pet | undefined;

        this.pets.forEach(pet => {
            if (nome === pet.getNome) {
                petSelecionado = pet;
            }
        });

        if (!petSelecionado) {
            throw new Error('Pet não encontrado.');
        }

        return petSelecionado;
    }
}