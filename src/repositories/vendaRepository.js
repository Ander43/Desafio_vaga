import pool from "../configs/database.js";


const vendaRepository = {

    selecionarVenda: async () => {
        const sql = `SELECT
                        v.*,
                        vd.nome AS "nome_vendedor"
                    FROM venda AS v
                    INNER JOIN vendedor AS vd
                        ON v.id_vendedor = vd.id;`;

        const [rows] = await pool.execute(sql);
        return rows;
    },

    selecionarVendaPorId: async (id) => {
        const sql = 'SELECT * FROM venda WHERE id = ?;';

        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },

    selecionarVendaporValor: async (valor) => {
        const sql = 'SELECT * FROM venda WHERE valor = ?;';

        const [rows] = await pool.execute(sql, [valor]);
        return rows;
    },

    deletarVenda: async (id) => {
        const sql = 'DELETE FROM venda WHERE id = ?;';

        const [rows] = await pool.execute(sql, [id]);
        return rows;
    },

    criarVenda: async (valor, comissao, idVendedor) => {
        console.log(valor, comissao, idVendedor);

        const sql = `INSERT INTO venda VALUES (null, ?, ?, ?);`;
        const [rows] = await pool.execute(sql, [valor, comissao, idVendedor]);
        return rows;
    },

    atualizarVenda: async (id, valor, comissao, idVendedor) => {
        const sql = `UPDATE venda SET valor = ?, comissao = ?, id_vendedor = ? WHERE id = ?`;
        const [rows] = await pool.execute(sql, [valor, comissao, idVendedor, id]);
        return rows;
    }

};


export default vendaRepository;