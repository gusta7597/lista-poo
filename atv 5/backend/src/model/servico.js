import connectToDB from '../db/dbconfig.js';


const queryServico = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS servico (id SERIAL PRIMARY KEY,nome VARCHAR(255), preco INT); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryServico()
export default queryServico;