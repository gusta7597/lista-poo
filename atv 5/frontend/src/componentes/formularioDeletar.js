import React, { useState } from 'react';

const FormularioDeletar = () => {
  const [id, setId] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      id,
    };
    try {
      const response = await fetch('http://localhost:32831/cliente/excluir', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Deletado com sucesso!')
        setDeleteSuccess(true);
      } else {
        console.error('Erro ao fazer o Delete.');
      }
    } catch (error) {
      console.error('Erro ao fazer o Delete:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          ID:
        </label>
        <input
          type="text"
          className="form-control"
          id="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
      </div>
      {deleteSuccess && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Remoção Feita!</h4>
          <p>já pode retornar para tela principal</p>
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>

    </form>
  );
};

export default FormularioDeletar;
