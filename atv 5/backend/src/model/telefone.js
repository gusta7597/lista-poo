import connectToDB from '../db/dbconfig.js';


const queryTelefone = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS telefone (id SERIAL PRIMARY KEY,DDD VARCHAR(255),numero VARCHAR(255),cliente_id INT,FOREIGN KEY(cliente_id) REFERENCES clientes(id) ON DELETE CASCADE); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryTelefone()
export default queryTelefone;