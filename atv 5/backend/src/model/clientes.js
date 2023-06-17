import connectToDB from '../db/dbconfig.js';


const queryClientes = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS clientes (id SERIAL PRIMARY KEY,nome VARCHAR(255),nome_social VARCHAR(255),data_cadastro VARCHAR(255)); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryClientes()
export default queryClientes;