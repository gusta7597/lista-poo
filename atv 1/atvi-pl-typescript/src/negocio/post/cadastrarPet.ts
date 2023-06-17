import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"

export default function cadastrarPet(cliente: Cliente) {
    let entrada = new Entrada()
    let nome = entrada.receberTexto('Nome do pet: ')
    let tipo = entrada.receberTexto('Tipo do pet (cachorro, gato, Passaro, etc): ')
    let raca = entrada.receberTexto('Raça do pet: ')
    let genero = entrada.receberTexto('Genero do pet: ')

    let novoPet = new Pet(nome, raca, genero, tipo)
    cliente.adicionarPet(novoPet)
}