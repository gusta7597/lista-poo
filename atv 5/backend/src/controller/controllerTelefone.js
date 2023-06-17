import connectToDB from '../db/dbconfig.js';

export async function allTelefone(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM telefone';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificTelefone(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM telefone where id = $1',
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

export async function createTelefone(req, res) {
    try {
        const { DDD, numero, cliente_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO telefone (DDD, numero, cliente_id) VALUES ($1, $2, $3)',
            values: [DDD, numero, cliente_id],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'Criado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao criar local:', error);
        res.status(500).json({ message: 'Erro ao criar local' });
    }
}

export async function updateTelefone(req, res) {
    try {
        const { id, DDD, numero, cliente_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'UPDATE telefone SET ddd = $1, numero = $2, cliente_id = $3 WHERE id = $4;',
            values: [DDD, numero, cliente_id, id],
        };

        const result = await pool.query(query);
        res.status(200).json({ message: 'Editado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao editar local:', error);
        res.status(500).json({ message: 'Erro ao editar local' });
    }
}

export async function deleteTelefone(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM telefone WHERE id = $1;',
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