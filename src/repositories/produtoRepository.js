import pool from "../configs/database.js";


const produtoRepository = {
    selecionar: async () => {
        const sql = 'SELECT * FROM produto;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarPorDescricao: async (descricao) => {
        const sql = 'SELECT * FROM produto WHERE descricao = ?;';
        const [rows] = await pool.execute(sql, [descricao]);
        return rows;
    },
    selecionarPorId: async (produtoId) => {
        const sql = 'SELECT * FROM produto WHERE id = ?;';
        const [rows] = await pool.execute(sql, [produtoId]);
        return rows;
    },
    deletar: async (produtoId) => {
        const sql = 'DELETE FROM produto WHERE id = ?;';
        const [rows] = await pool.execute(sql, [produtoId]);
        return rows;
    },

    criar: async (codigoProduto, descricao, estoqueAtual) => {
        console.log (codigoProduto, descricao, estoqueAtual);

        console.log ({codigoProduto, descricao, estoqueAtual});
        
        const sql = 'INSERT INTO produto VALUES (null, ?, ?, ?);';
        const [rows] = await pool.execute(sql, [codigoProduto, descricao, estoqueAtual]);
        return rows;
    },

    atualizar: async (codigoProduto, descricao, estoqueAtual, id) => {
        console.log (codigoProduto, descricao, estoqueAtual, id);

        const sql = 'UPDATE produto SET codigo_produto = ?, descricao = ?, estoque_atual = ? WHERE id = ?;';
        const [rows] = await pool.execute(sql, [codigoProduto, descricao, estoqueAtual, id]);
        return rows;
    },
        
}

export default produtoRepository;