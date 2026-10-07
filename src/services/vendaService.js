import vendaRepository from "../repositories/vendaRepository.js";

const vendaService = {
    recuperarVenda: async () => {
        const resultado = await vendaRepository.selecionarVenda();
        return resultado;
    },
    recuperarVendaPorId: async (id) => {
        const resultado = await vendaRepository.selecionarVendaPorId(id);
        return resultado;
    },
    recuperarVendaporValor: async (valor) => {
        const resultado = await vendaRepository.selecionarVendaporValor(valor);
        return resultado;
    },

    deletarVenda: async (id) => {
        const resultado = await vendaRepository.deletarVenda(id);
        return resultado;
    },
    calcularComissao: (valor) => {

        if (valor < 100) {
            return 0;
        }

        if (valor < 500) {
            return valor * 0.01;
        }

        if (valor >= 500) {
            return valor * 0.05;
        }

        return 0;
    },

    criarVenda: async (venda) => {
        const comissao = vendaService.calcularComissao(venda.valor);
        const resultado = await vendaRepository.criarVenda(venda.valor, comissao, venda.idVendedor, venda.id);
        return resultado;
    },

    atualizarVenda: async (venda) => {
        const resultado = await vendaRepository.atualizarVenda(venda.valor, venda.comissao, venda.idVendedor, venda.id);
        return resultado;
    }

};

export default vendaService;