import connectToDB from '../db/dbconfig.js';

export async function allPets(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM pets';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificPets(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM pets where id = $1',
            values: [id],
        };
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function createPets(req, res) {
    try {
        const {nome, raca, genero, tipo, cliente_id} = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO pets (nome, raca, genero, tipo, cliente_id) VALUES ($1, $2, $3)',
            values: [nome, raca, genero, tipo, cliente_id],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'Criado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao criar local:', error);
        res.status(500).json({ message: 'Erro ao criar local' });
    }
}

export async function updatePets(req, res) {
    try {
        const { id, nome, raca, genero, tipo} = req.body
        const pool = connectToDB();
        const query = {
            text: 'UPDATE pets SET nome = $1, raca = $2, genero = $3 , tipo = $4 WHERE id = $5;',
            values: [nome, raca, genero, tipo, id],
        };

        const result = await pool.query(query);
        res.status(200).json({ message: 'Editado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao editar local:', error);
        res.status(500).json({ message: 'Erro ao editar local' });
    }
}

export async function deletePets(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM pets WHERE id = $1;',
            values: [id],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'removido com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao remover local:', error);
        res.status(500).json({ message: 'Erro ao remover local' });
    }
}