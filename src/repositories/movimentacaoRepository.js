import pool from "../configs/database.js";


const movimentacaoRepository = {
    selecionarMovimentacao: async () => {
        const sql = `SELECT 
                        m.*, 
                        p.nome AS "nome_produto"
                    FROM movimentacao AS m
                    INNER JOIN produto AS p
                        ON m.id_produto = p.id;`;

        const [rows] = await pool.execute(sql);
        return rows;
    },

    selecionarMovimentacaoPorId: async (id) => {
        const sql = 'SELECT * FROM movimentacao WHERE id = ?;';

        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },

    selecionarMovimentacaoPorEntrada: async (entrada) => {
        const sql = 'SELECT * FROM movimentacao WHERE entrada = ?;';

        const [rows] = await pool.execute(sql, [entrada]);
        return rows;
    },

    deletarMovimentacao: async (id) => {
        const sql = 'DELETE FROM movimentacao WHERE id = ?;';

        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },

    criarMovimentacao: async (entrada, saida, dataMovimentacao, idProduto) => {
        const sql = `INSERT INTO movimentacao (entrada, saida, data_mov, id_produto) VALUES (?, ?, ?, ?);`;
        const [rows] = await pool.execute(sql, [entrada, saida, dataMovimentacao, idProduto]);
        return rows;
    },

    atualizarMovimentacao: async (id, entrada, saida, dataMovimentacao, idProduto) => {
        const sql = `UPDATE movimentacao SET entrada = ?, saida = ?, data_mov = ?, id_produto = ? WHERE id = ?`;
        const [rows] = await pool.execute(sql, [entrada, saida, dataMovimentacao, idProduto, id]);
        return rows;
    }

};

export default movimentacaoRepository;
