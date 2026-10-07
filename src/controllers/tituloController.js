import Titulo from "../models/Titulo.js";
import tituloService from "../services/tituloService.js";

const tituloController = {

    selecionar: async (req, res) => {
        try {
            const resultado = await tituloService.recuperarTitulo();

            res.status(200).json({
                message: "Títulos recuperados com sucesso:",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar título!",
                data: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const {
                valorOriginal,
                dataVencimento
            } = req.body;

            const titulo = new Titulo(
                valorOriginal,
                dataVencimento
            );

            const resultado = await tituloService.criarTitulo(titulo);

            return res.status(201).json({
                message: "Título criado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao criar o título!",
                data: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await tituloService.deletarTitulo(id);

            return res.status(200).json({
                message: "Título deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro ao deletar o título!",
                data: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { id } = req.params;

            const {
                valorOriginal,
                dataVencimento
            } = req.body;

            const titulo = new Titulo(
                valorOriginal,
                dataVencimento,
                null,
                null,
                null,
                id
            );

            const resultado = await tituloService.atualizarTitulo(titulo);

            return res.status(200).json({
                message: "Título atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);

            return res.status(500).json({
                message: "Erro na atualização do título!",
                data: error.message
            });
        }
    }
};

export default tituloController;
