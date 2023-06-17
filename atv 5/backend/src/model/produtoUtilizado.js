import connectToDB from '../db/dbconfig.js';


const queryProdutoUtilizado = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS produtoUtilizado (id SERIAL PRIMARY KEY,cliente_id INT,produto_id INT,FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE,FOREIGN KEY (produto_id) REFERENCES produto(id)); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryProdutoUtilizado()
export default queryProdutoUtilizado;