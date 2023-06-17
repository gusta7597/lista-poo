import React from "react";

const ListaCliente = ({ tema }) => {
  const tableStyle = {
    width: '50%',
    margin: '0 auto',
  };

  return (
    <table className="table w-75" style={tableStyle}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">CPF</th>
          <th scope="col">Data Registro</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Otto</td>
          <td>123.321.213-44</td>
          <td>22/12/20</td>
          <td>Editar / Excluir</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Rafa</td>
          <td>222.333.444-21</td>
          <td>31/01/21</td>
          <td>Editar / Excluir</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Paulo</td>
          <td>333.444.555-00</td>
          <td>28/02/22</td>
          <td>Editar / Excluir</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListaCliente;