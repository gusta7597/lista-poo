import React, { useState } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [nome_social, setNome_Social] = useState('');
  const [data_cadastro, setDataCadastro] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [rg, setRg] = useState({
    valor: '',
    data_Emissao: '',
  })
  const [cpf, setCpf] = useState({
    valor: '',
    data_Emissao: '',
  })
  const [pet, setPet] = useState({
    nome: '',
    tipo: '',
    raca: '',
    genero:'',
    cliente_user:''
  })
  const [telefones, setTelefones] = useState('')

  const handleTelefoneChange = (index, field, event) => {
    const novosTelefones = [...telefones];
    novosTelefones[index] = {
      ...novosTelefones[index],
      [field]: event.target.value,
    };
    setTelefones(novosTelefones);
  };

  const adicionarTelefone = () => {
    setTelefones([...telefones, { ddd: '', numero: '', cliente_id }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      nome,
      nome_social,
      data_cadastro
    };

    try {
      const response = await fetch('http://localhost:32831/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Inserção feita com sucesso!')
        setShowSuccess(true);
      } else {
        console.error('Erro ao fazer a inserção.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome:
        </label>
        <input
          type="text"
          className="form-control"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nomeSocial" className="form-label">
          Nome Social:
        </label>
        <input
          type="text"
          className="form-control"
          id="nomeSocial"
          value={nome_social}
          onChange={(event) => setNome_Social(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dataCadastro" className="form-label">
          Data Cadastro:
        </label>
        <input
          type="text"
          className="form-control"
          id="dataCadastro"
          value={data_cadastro}
          onChange={(event) => setDataCadastro(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="telefone" className="form-label">
          RG:
        </label>
        {telefones.map((telefoneItem, index) => (
          <div key={`telefone-${index}`}>
            <input
              type="text"
              className="form-control"
              placeholder="DDD"
              value={telefoneItem.ddd}
              onChange={(event) => handleTelefoneChange(index, 'ddd', event)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Número"
              value={telefoneItem.numero}
              onChange={(event) => handleTelefoneChange(index, 'numero', event)}
            />
          </div>
        ))}
        <button type="button" className="btn btn-secondary mt-2" onClick={adicionarTelefone}>
          Adicionar Telefone
        </button>
      </div>

      {showSuccess && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Cadastro Feito!</h4>
          <p>já pode retornar para tela principal</p>
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>

    </form>
  );
};

export default Formulario;
