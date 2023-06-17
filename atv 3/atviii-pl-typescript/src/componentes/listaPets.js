import React from "react";

const ListaPets = ({ tema }) => {
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
          <th scope="col">Dono</th>
          <th scope="col">Raça</th>
          <th scope="col">Tipo</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Yorkshire</td>
          <td>Cachorro</td>
          <td>Editar / Excluir</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bob</td>
          <td>Rafa</td>
          <td>Golden</td>
          <td>Cachorro</td>
          <td>Editar / Excluir</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Max</td>
          <td>Paulo</td>
          <td>Shitzu</td>
          <td>Cachorro</td>
          <td>Editar / Excluir</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListaPets;
