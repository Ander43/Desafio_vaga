import vendedorRepository from "../repositories/vendedorRepository.js";

const vendedorService = {
    recuperarVendedor: async () => {
        const resultado = await vendedorRepository.selecionar();
        return resultado;
    },
    recuperarVendedorPorId: async (vendedorId) => {
        const resultado = await vendedorRepository.selecionarPorId(vendedorId);
        return resultado;
    },
    recuperarVendedorPorNome: async (nome) => {
        const resultado = await vendedorRepository.selecionarPorNome(nome);
        return resultado;
    },

    deletarVendedor: async (vendedorId) => {
        const resultado = await vendedorRepository.deletar(vendedorId);
        return resultado;
    },

    criarVendedor: async (vendedor) => {
        const resultado = await vendedorRepository.criar(vendedor.nome);
        return resultado;
    },

    atualizarVendedor: async (vendedor) => {
        const resultado = await vendedorRepository.atualizar(vendedor.nome, vendedor.id);
        return resultado;
    },
    
};

export default vendedorService;