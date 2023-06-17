import connectToDB from '../db/dbconfig.js';


const queryEmpresas = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS empresas (id SERIAL PRIMARY KEY,nome VARCHAR(255), cliente_id INT, produto_id INT, servico_id INT, FOREIGN KEY(cliente_id) REFERENCES clientes(id),FOREIGN KEY(servico_id) REFERENCES servico(id), FOREIGN KEY(produto_id) REFERENCES produto(id)); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryEmpresas()
export default queryEmpresas;