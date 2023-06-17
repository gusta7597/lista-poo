import connectToDB from '../db/dbconfig.js';

export async function allClientes(req, res) {
    const pool = connectToDB();
    try {
        const query = 'SELECT * FROM clientes';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao realizar a consulta:', error);
        res.status(500).json({ message: 'Erro ao realizar a consulta' });
    }
    pool.end();
}

export async function specificClientes(req, res) {
    const pool = connectToDB();
    try {
        const { id } = req.body
        const query = {
            text: 'SELECT * FROM clientes where id = $1',
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

export async function createClientes(req, res) {
    try {
        const { nome, nomeSocial, dataCadastro } = req.body
        const pool = connectToDB();
        const query = {
            text: 'INSERT INTO clientes (nome, nome_Social, data_Cadastro) VALUES ($1, $2, $3)',
            values: [nome, nomeSocial, dataCadastro],
        };
        const result = await pool.query(query);
        res.status(200).json({ message: 'Criado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao criar local:', error);
        res.status(500).json({ message: 'Erro ao criar', error });
    }
}

export async function updateClientes(req, res) {
    try {
        const { id, nome, nomeSocial, dataCadastro } = req.body
        const pool = connectToDB();
        const query = {
            text: 'UPDATE clientes SET nome = $1, nome_Social = $2, data_Cadastro = $3 WHERE id = $4;',
            values: [nome, nomeSocial, dataCadastro, id],
        };

        const result = await pool.query(query);
        res.status(200).json({ message: 'Editado com sucesso' });
        pool.end();
    } catch (error) {
        console.error('Erro ao editar local:', error);
        res.status(500).json({ message: 'Erro ao editar local' });
    }
}

export async function deleteCliente(req, res) {
    try {
        const { id } = req.body
        const pool = connectToDB();
        const query = {
            text: 'DELETE FROM clientes WHERE id = $1;',
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