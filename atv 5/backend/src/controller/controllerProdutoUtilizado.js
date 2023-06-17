import connectToDB from '../db/dbconfig.js';

export async function allProdutoUtilizado(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM produtoUtilizado';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificProdutoUtilizado(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM produtoUtilizado where id = $1',
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

export async function createProdutoUtilizado(req, res) {
    try {
        const { preco, cliente_id, produto_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO produtoUtilizado (preco, cliente_id, produto_id) VALUES ($1, $2, $3)',
            values: [nome, nomeSocial, dataCadastro],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'Criado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao criar local:', error);
        res.status(500).json({ message: 'Erro ao criar local' });
    }
}

export async function deleteProdutoUtilizado(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM produtoUtilizado WHERE id = $1;',
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