import React, { useState } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [endereco, setEndereco] = useState({
    rua: '',
    cidade: '',
    estado: '',
    bairro: '',
    numero: '',
    codigoPostal: '',
    informacoesAdicionais: ''
  });
  const [telefones, setTelefones] = useState([]);

  const handleTelefoneChange = (index, field, event) => {
    const novosTelefones = [...telefones];
    novosTelefones[index] = {
      ...novosTelefones[index],
      [field]: event.target.value,
    };
    setTelefones(novosTelefones);
  };

  const adicionarTelefone = () => {
    setTelefones([...telefones, { ddd: '', numero: '' }]);
  };

  const handleSubmit  = async (event) => {
    event.preventDefault();
    const formData = {
      nome,
      nomeSocial,
      email,
      endereco,
      telefones,
    };

    try {
      const response = await fetch('http://localhost:32831/cliente/cadastrar', {
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
          value={nomeSocial}
          onChange={(event) => setNomeSocial(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <div>
          <div className="mb-3">
            <label htmlFor="estado" className="form-label">
              estado:
            </label>
            <input
              type="text"
              className="form-control"
              id="estado"
              value={endereco.estado}
              onChange={(event) => setEndereco({ ...endereco, estado: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cidade" className="form-label">
              Cidade:
            </label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              value={endereco.cidade}
              onChange={(event) => setEndereco({ ...endereco, cidade: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bairro" className="form-label">
              Bairro:
            </label>
            <input
              type="text"
              className="form-control"
              id="bairro"
              value={endereco.bairro}
              onChange={(event) => setEndereco({ ...endereco, bairro: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rua" className="form-label">
              Rua:
            </label>
            <input
              type="text"
              className="form-control"
              id="rua"
              value={endereco.rua}
              onChange={(event) => setEndereco({ ...endereco, rua: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="numero" className="form-label">
              Numero:
            </label>
            <input
              type="text"
              className="form-control"
              id="numero"
              value={endereco.numero}
              onChange={(event) => setEndereco({ ...endereco, numero: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="codigoPostal" className="form-label">
              Codigo Postal:
            </label>
            <input
              type="text"
              className="form-control"
              id="codigoPostal"
              value={endereco.codigoPostal}
              onChange={(event) => setEndereco({ ...endereco, codigoPostal: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="informacoesAdicionais" className="form-label">
              Informacoes Adicionais:
            </label>
            <input
              type="text"
              className="form-control"
              id="informacoesAdicionais"
              value={endereco.informacoesAdicionais}
              onChange={(event) => setEndereco({ ...endereco, informacoesAdicionais: event.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="telefone" className="form-label">
          Telefone:
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
