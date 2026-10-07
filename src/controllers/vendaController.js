import Venda from "../models/Venda.js";
import vendaService from "../services/vendaService.js";


const vendaController = {

    selecionar: async (req, res) => {
        try {

            const resultado = await vendaService.recuperarVenda();

            res.status(200).json({
                message: "Vendas recuperadas com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao recuperar Vendas!",
                data: error.message
            });
        }
    },


    criar: async (req, res) => {
        try {

            const {
                valor,
                idVendedor
            } = req.body;

            const venda = new Venda(
                valor,
                null,
                idVendedor
            );

            const resultado = await vendaService.criarVenda(venda);

            return res.status(201).json({
                message: "Venda criada com sucesso!",
                data: resultado
            });

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar a venda!",
                data: error.message
            });
        }
    },


    deletar: async (req, res) => {
        try {

            const { id } = req.params;

            const resultado = await vendaService.deletarVenda(id);

            return res.status(200).json({
                message: "Venda deletada com sucesso!",
                data: resultado
            });

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar a venda!",
                data: error.message
            });
        }
    },


    atualizar: async (req, res) => {
        try {

            const { id } = req.params;

            const {
                valor,
                idVendedor
            } = req.body;

            const venda = new Venda(
                valor,
                null,
                idVendedor,
                id
            );

            const resultado = await vendaService.atualizarVenda(venda);

            return res.status(200).json({
                message: "Venda atualizada com sucesso!",
                data: resultado
            });

        } catch (error) {

            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização da venda!",
                data: error.message
            });
        }
    }

};


export default vendaController;
