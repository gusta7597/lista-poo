import React, { useEffect, useState } from 'react';

const ListaCliente = ({ tema }) => {

  const [data, setData] = useState([]);
  const tableStyle = {
    width: '50%',
    margin: '0 auto',
  };
  useEffect(() => {
    fetch('http://localhost:32831/clientes')
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
          <th scope="col">Data Cadastro</th>

        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr scope="row" key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.nome_social}</td>
            <td>{user.data_cadastro}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaCliente;
