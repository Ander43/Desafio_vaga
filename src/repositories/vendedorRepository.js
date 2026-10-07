import pool from "../configs/database.js";


const vendedorRepository = {
    selecionar: async () => {
        const sql = 'SELECT * FROM vendedor;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarPorNome: async (nome) => {
        const sql = 'SELECT * FROM vendedor WHERE nome = ?;';
        const [rows] = await pool.execute(sql, [nome]);
        return rows;
    },
    selecionarPorId: async (vendedorId) => {
        const sql = 'SELECT * FROM vendedor WHERE id = ?;';
        const [rows] = await pool.execute(sql, [vendedorId]);
        return rows;
    },
    deletar: async (vendedorId) => {
        const sql = 'DELETE FROM vendedor WHERE id = ?;';
        const [rows] = await pool.execute(sql, [vendedorId]);
        return rows;
    },

    criar: async (nome) => {
        const sql = 'INSERT INTO vendedor (nome) VALUES (?);';
        const [rows] = await pool.execute(sql, [nome]);
        return rows;
    },

    atualizar: async (nome, vendedorId) => {
        const sql = 'UPDATE vendedor SET nome = ? WHERE id =?;';
        const [rows] = await pool.execute(sql, [nome, vendedorId]);
        return rows;
    },
        
}

export default vendedorRepository;
