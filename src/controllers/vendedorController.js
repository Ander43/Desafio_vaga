import Vendedor from "../models/Vendedor.js";
import vendedorService from "../services/vendedorService.js";

const vendedorController = {

    selecionar: async (req, res) => {
        try{
            const resultado = await vendedorService.recuperarVendedor();

            res.status(200).json({
                menssage: "Vendedores recuperados com sucesso:",
                data: resultado

            });
        }
        
        catch (error){
            res.status(500).json({
                message: "Erro ao recuperar vendedores!",
                data: error.message
            });

        }
    },

    criar: async (req, res) => {
        try {

            const { nome } = req.body;

            const vendedor = new Vendedor(nome, null);

            const resultado = await vendedorService.criarVendedor(vendedor);

            return res.status(201).json({
                message: "Vendedor criado com sucesso!",
                data: resultado
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                message: "Erro ao criar vendedor!",
                    data: error.resultado


            });
        }
    },

    deletar: async (req, res) => {

        try {
            const {id}= req.params;

            const resultado = await vendedorService.deletarVendedor(id);

            return res.status(200).json({
                message: "Vendedor deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao deletar vendedor!",
                data: error
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const {id}= req.params;

            const {nome} = req.body;

            const vendedor = new Vendedor(nome, id);

            const resultado = await vendedorService.atualizarVendedor(vendedor);

            return res.status(200).json({
                message: "Vendedor atualizado com sucesso!",
                data: resultado
            });
        }
        catch(error){
            console.error(error);
            return res.status(500).json({
                message: "Erro na atualização do vendedor!",
                    data: error.resultado


            });
        }
    }

}

export default vendedorController;
