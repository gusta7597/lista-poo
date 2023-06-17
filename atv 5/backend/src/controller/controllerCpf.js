import connectToDB from '../db/dbconfig.js';

export async function allCpf(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM cpf';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificCpf(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM cpf where cliente_id = $1',
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

export async function createCpf(req, res) {
    try {
        const { valor, dataEmissao, cliente_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO cpf (valor, dataEmissao, cliente_id) VALUES ($1, $2, $3)',
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

export async function updateCpf(req, res) {
    try {
        const { valor, dataEmissao, cliente_id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'UPDATE cpf SET valor = $1, dataEmissao = $2, WHERE cliente_id = $3;',
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

export async function deleteCpf(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM cpf WHERE cliente_id = $1;',
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