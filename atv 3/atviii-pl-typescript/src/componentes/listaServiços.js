import React from "react";

const ListaServicos = ({ tema }) => {
  const tableStyle = {
    width: '50%',
    margin: '0 auto',
  };

  return (
    <table className="table w-75" style={tableStyle}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Serviços/Produtos</th>
          <th scope="col">Quantidade de vezes usado</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Tosa e Banho</td>
          <td>4</td>
          <td>Editar / Excluir</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Tosa</td>
          <td>1</td>
          <td>Editar / Excluir</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Banho</td>
          <td>7</td>
          <td>Editar / Excluir</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListaServicos;