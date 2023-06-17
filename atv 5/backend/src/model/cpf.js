import connectToDB from '../db/dbconfig.js';


const queryCpf = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS cpf (id SERIAL PRIMARY KEY,valor VARCHAR(255),dataEmissao VARCHAR(255),cliente_id INT,FOREIGN KEY(cliente_id) REFERENCES clientes(id) ON DELETE CASCADE); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryCpf()
export default queryCpf;