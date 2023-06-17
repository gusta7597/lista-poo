import connectToDB from '../db/dbconfig.js';

export async function allServicoUtilizado(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM servicoUtilizado';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificServicoUtilizado(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM servicoUtilizado where id = $1',
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

export async function createServicoUtilizado(req, res) {
    try {
        const { preco, cliente_id, servico_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO servicoUtilizado (preco, cliente_id, servico_id) VALUES ($1, $2, $3)',
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

export async function deleteServicoUtilizado(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM servicoUtilizado WHERE id = $1;',
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