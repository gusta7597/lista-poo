import connectToDB from '../db/dbconfig.js';

export async function allEmpresas(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM empresas';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificEmpresas(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM empresas where id = $1',
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

export async function createEmpresas(req, res) {
    try {
        const { nome, clienteID, produtoID, servicoID } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO empresas (nome, cliente_id, produto_id, servico_id ) VALUES ($1, $2, $3, $4)',
            values: [nome, clienteID, produtoID, servicoID],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'Criado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao criar local:', error);
        res.status(500).json({ message: 'Erro ao criar local' });
    }
}

export async function updateEmpresas(req, res) {
    try {
        const { id, nome, clienteID, produtoID, servicoID } = req.body
        const pool = connectToDB();
        const query = {
            text: 'UPDATE empresas SET nome = $1, cliente_id = $2, produto_id = $3, servico_id = $3 WHERE id = $4;',
            values: [nome, clienteID, produtoID, servicoID, id],
        };

        const result = await pool.query(query);
        res.status(200).json({ message: 'Editado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao editar local:', error);
        res.status(500).json({ message: 'Erro ao editar local' });
    }
}

export async function deleteEmpresa(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM empresas WHERE id = $1;',
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