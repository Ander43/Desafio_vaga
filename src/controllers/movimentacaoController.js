import Movimentacao from "../models/Movimentacao.js";
import movimentacaoService from "../services/movimentacaoService.js";

const movimentacaoController = {

    selecionar: async (req, res) => {
        try {

            const resultado = await movimentacaoService.recuperarMovimentacao();

            res.status(200).json({
                message: "Movimentações recuperadas com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao recuperar Movimentações!",
                data: error.message
            });
        }
    },


    criar: async (req, res) => {
        try {

            const {
                entrada,
                saida,
                dataMovimentacao,
                idProduto
            } = req.body;

            const movimentacao = new Movimentacao(
                entrada,
                saida,
                dataMovimentacao,
                idProduto
            );

            const resultado = await movimentacaoService.criarMovimentacao(movimentacao);

            return res.status(201).json({
                message: "Movimentação criada com sucesso!",
                data: resultado
            });

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar a movimentação!",
                data: error.message
            });
        }
    },


    deletar: async (req, res) => {
        try {

            const { id } = req.params;

            const resultado = await movimentacaoService.deletarMovimentacao(id);

            return res.status(200).json({
                message: "Movimentação deletada com sucesso!",
                data: resultado
            });

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar a movimentação!",
                data: error.message
            });
        }
    },


    atualizar: async (req, res) => {
        try {

            const { id } = req.params;

            const {
                entrada,
                saida,
                dataMovimentacao,
                idProduto
            } = req.body;

            const movimentacao = new Movimentacao(
                entrada,
                saida,
                dataMovimentacao,
                idProduto
            );

            const resultado = await movimentacaoService.atualizarMovimentacao(
                movimentacao
            );

            return res.status(200).json({
                message: "Movimentação atualizada com sucesso!",
                data: resultado
            });

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização da movimentação!",
                data: error.message
            });
        }
    }

};

export default movimentacaoController;
