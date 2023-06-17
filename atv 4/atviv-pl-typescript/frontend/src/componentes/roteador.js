/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastro from "./formularioCadastro";
import FormularioDeletar from "./formularioDeletar";
import FormularioEditar from "./formularioEditar";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Deletar', 'Editar']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Deletar', 'Editar']} />
                    <FormularioCadastro tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Deletar') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Deletar', 'Editar']} />
                    <FormularioDeletar tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Editar') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Deletar', 'Editar']} />
                    <FormularioEditar tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}