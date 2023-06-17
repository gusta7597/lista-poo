import connectToDB from '../db/dbconfig.js';

export async function allProduto(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM produto';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificProduto(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM produto where id = $1',
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

export async function createProduto(req, res) {
    try {
        const { nome, preco } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO produto (nome, preco) VALUES ($1, $2)',
            values: [nome, preco],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'Criado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao criar local:', error);
        res.status(500).json({ message: 'Erro ao criar local' });
    }
}

export async function updateProduto(req, res) {
    try {
        const { id, nome, preco } = req.body
        const pool = connectToDB();
        const query = {
            text: 'UPDATE produto SET nome = $1, preco = $2 WHERE id = $3;',
            values: [nome, preco, id],
        };

        const result = await pool.query(query);
        res.status(200).json({ message: 'Editado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao editar local:', error);
        res.status(500).json({ message: 'Erro ao editar local' });
    }
}

export async function deleteProduto(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM Produto WHERE id = $1;',
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