import pool from "../configs/database.js";

const tituloRepository = {

    selecionar: async () => {
        const sql = 'SELECT * FROM titulo;';
        const [rows] = await pool.execute(sql);
        return rows;
    },

    selecionarPorValorOriginal: async (valorOriginal) => {
        const sql = 'SELECT * FROM titulo WHERE valor_original = ?;';
        const [rows] = await pool.execute(sql, [valorOriginal]);
        return rows;
    },

    selecionarPorId: async (tituloId) => {
        const sql = 'SELECT * FROM titulo WHERE id = ?;';
        const [rows] = await pool.execute(sql, [tituloId]);
        return rows;
    },

    deletar: async (tituloId) => {
        const sql = 'DELETE FROM titulo WHERE id = ?;';
        const [rows] = await pool.execute(sql, [tituloId]);
        return rows;
    },

    criar: async (
        valorOriginal,
        dataVencimento,
        diasAtraso,
        jurosCalculado,
        valorFinal
    ) => {

        const sql = `
            INSERT INTO titulo
            VALUES (null, ?, ?, ?, ?, ?);
        `;

        const [rows] = await pool.execute(sql, [
            valorOriginal,
            dataVencimento,
            diasAtraso,
            jurosCalculado,
            valorFinal
        ]);

        return rows;
    },

    atualizar: async (
        valorOriginal,
        dataVencimento,
        diasAtraso,
        jurosCalculado,
        valorFinal,
        id
    ) => {

        const sql = `
            UPDATE titulo
            SET valor_original = ?,
                data_vencimento = ?,
                dias_atraso = ?,
                juros_calculado = ?,
                valor_final = ?
            WHERE id = ?;
        `;

        const [rows] = await pool.execute(sql, [
            valorOriginal,
            dataVencimento,
            diasAtraso,
            jurosCalculado,
            valorFinal,
            id
        ]);

        return rows;
    }
};

export default tituloRepository;