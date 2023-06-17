import connectToDB from '../db/dbconfig.js';

export async function allRg(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM rg';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificRg(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM rg where cliente_id = $1',
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

export async function createRg(req, res) {
    try {
        const { valor, dataEmissao, cliente_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO rg (valor, dataEmissao, cliente_id) VALUES ($1, $2, $3)',
            values: [valor, dataEmissao, cliente_id],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'Criado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao criar local:', error);
        res.status(500).json({ message: 'Erro ao criar local' });
    }
}

export async function updateRg(req, res) {
    try {
        const { valor, dataEmissao, cliente_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'UPDATE rg SET valor = $1, dataEmissao = $2, WHERE cliente_id = $3;',
            values: [valor, dataEmissao, cliente_id],
        };

        const result = await pool.query(query);
        res.status(200).json({ message: 'Editado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao editar local:', error);
        res.status(500).json({ message: 'Erro ao editar local' });
    }
}

export async function deleteRg(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM rg WHERE cliente_id = $1;',
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