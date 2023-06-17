import React, { useState } from "react";
import '../estilizacao/formularioCadastro.css';

const FormularioCadastro = ({ tema }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const centerStyle = {
    width: '50%',
    margin: '0 auto',
  };

  return (
    <div className="radio-button-container">
      <h3>Que Tipo de dado você irá cadastrar?</h3>
      <label className="radio-button-label">
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleSelectOption}
          className="radio-button-input"
        />
        <span className="radio-button-custom"></span>
        Cliente
      </label>

      <label className="radio-button-label">
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleSelectOption}
          className="radio-button-input"
        />
        <span className="radio-button-custom"></span>
        Pet
      </label>

      <label className="radio-button-label">
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleSelectOption}
          className="radio-button-input"
        />
        <span className="radio-button-custom"></span>
        Serviços ou produtos
      </label>

      {selectedOption === "option1" && (
        <form style={centerStyle}>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputNome" />
          </div>

          <div className="mb-3">
            <label htmlFor="inputNomeSocial" className="form-label">Nome Social</label>
            <input type="text" className="form-control" id="inputNomeSocial" />
          </div>

          <div className="mb-3">
            <label htmlFor="inputCpf" className="form-label">CPF</label>
            <input type="text" className="form-control" id="inputCpf" />
          </div>

          <div className="mb-3">
            <label htmlFor="inputDataCadastro" className="form-label">Data Cadastro</label>
            <input type="text" className="form-control" id="inputCadastro" />
          </div>

          <div className="mb-3">
            <label htmlFor="inputRG" className="form-label">RG</label>
            <input type="text" className="form-control" id="inputRG" />
            <br /><button type="button" className="btn btn-primary pt-1">adicionar</button>
          </div>

          <div className="mb-3">
            <label htmlFor="inputTelefones" className="form-label">Telefones</label>
            <input type="text" className="form-control" id="inputTelefones" />
            <br /><button type="button" className="btn btn-primary">adicionar</button>
          </div>

          <label htmlFor="servicosProdutos" className="form-label">Adicionar Serviços ou produtos</label>
          <select className="form-select" aria-label="servicosProdutos">
            <option selected>Serviços ou produtos utilizados</option>
            <option value="1">Tosa</option>
            <option value="2">Banho</option>
            <option value="3">Banho e Tosa</option>
          </select>
          <br /><button type="button" className="btn btn-primary">adicionar</button>
          <div>
            <br /> <button type="submit" className="btn btn-primary">Confirmar</button>
          </div>
        </form>
      )}

      {selectedOption === "option2" && (
        <form style={centerStyle}>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputNome" />
          </div>

          <div className="mb-3">
            <label htmlFor="inputRaca" className="form-label">Raça</label>
            <input type="text" className="form-control" id="inputRaca" />
          </div>

          <div className="mb-3">
            <label htmlFor="inputTipo" className="form-label">Tipo</label>
            <input type="text" className="form-control" id="inputTipo" />
          </div>

          <label htmlFor="dono" className="form-label">Dono do Pet</label>
          <select className="form-select" aria-label="donoPet">
            <option selected>Dono</option>
            <option value="1">Otto</option>
            <option value="2">Rafa</option>
            <option value="3">Paulo</option>
          </select>
          <br /> <button type="submit" className="btn btn-primary">Confirmar</button>
        </form>
      )}
      {selectedOption === "option3" && (
        <form style={centerStyle}>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputNome" />
          </div>

          <br /> <button type="submit" className="btn btn-primary">Confirmar</button>
        </form>
      )}
    </div>
  );
};

export default FormularioCadastro;