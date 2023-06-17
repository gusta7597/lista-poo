import connectToDB from '../db/dbconfig.js';


const queryServicoUtilizado = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS produtoUtilizado (id SERIAL PRIMARY KEY,cliente_id INT,servico_id INT,FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE, FOREIGN KEY (servico_id) REFERENCES servico(id)); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryServicoUtilizado()
export default queryServicoUtilizado;