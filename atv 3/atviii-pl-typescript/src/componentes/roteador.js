import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastro from "./formularioCadastro";
import ListaPets from "./listaPets";
import ListaServicos from "./listaServiços";

export default function Roteador() {
  const [tela, setTela] = useState('Clientes');

  const selecionarView = (valor, e) => {
    e.preventDefault();
    setTela(valor);
  };

  const construirView = () => {
    if (tela === 'Clientes') {
      return (
        <>
          <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Servicos', 'Cadastros']} />
          <ListaCliente tema="#e3f2fd" />
        </>
      );
    } else if (tela === 'Cadastros') {
      return (
        <>
          <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Servicos', 'Cadastros']} />
          <FormularioCadastro tema="#e3f2fd" />
        </>
      );
    } else if (tela === 'Pets') {
      return (
        <>
          <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Servicos', 'Cadastros']} />
          <ListaPets tema="#e3f2fd" />
        </>
      );
    } else if (tela === 'Servicos') {
      return (
        <>
          <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Servicos', 'Cadastros']} />
          <ListaServicos tema="#e3f2fd" />
        </>
      );
    }
  };

  return construirView();
}