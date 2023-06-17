import React, { useEffect, useState } from 'react';

const ListaCliente = ({ tema }) => {

  const [data, setData] = useState([]);
  const tableStyle = {
    width: '50%',
    margin: '0 auto',
  };
  useEffect(() => {
    fetch('http://localhost:32831/cliente/clientes')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }, []);

  return (
    <table className="table w-75" style={tableStyle}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Nome Social</th>
          <th scope="col">email</th>
          <th scope="col">Endereço</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr scope="row" key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.nomeSocial}</td>
            <td>{user.email}</td>
            <td>{user.endereco.cidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaCliente;
