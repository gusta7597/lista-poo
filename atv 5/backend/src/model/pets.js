import connectToDB from '../db/dbconfig.js';


const queryPets = () => {
    const pool = connectToDB();

    const queryString = "CREATE TABLE IF NOT EXISTS pets (id SERIAL PRIMARY KEY,nome VARCHAR(255),raca VARCHAR(255),genero VARCHAR(11),tipo VARCHAR(255),cliente_id INT,FOREIGN KEY(cliente_id) REFERENCES clientes(id) ON DELETE CASCADE); ";

    pool.query(queryString, (err, res) => {
        if (err) {
            console.error('Erro ao executar a tabela:', err);
        }
        pool.end();
    });
};
queryPets()
export default queryPets;