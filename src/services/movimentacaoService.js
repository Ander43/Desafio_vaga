
import movimentacaoRepository from "../repositories/movimentacaoRepository.js";

const movimentacaoService = {

    recuperarMovimentacao: async () => {
        const resultado = await movimentacaoRepository.selecionarMovimentacao();
        return resultado;
    },

    recuperarMovimentacaoPorId: async (id) => {
        const resultado = await movimentacaoRepository.selecionarMovimentacaoPorId(id);
        return resultado;
    },

    recuperarMovimentacaoPorEntrada: async (entrada) => {
        const resultado = await movimentacaoRepository.selecionarMovimentacaoPorEntrada(entrada);
        return resultado;
    },

    recuperarMovimentacaoPorSaida: async (saida) => {
        const resultado = await movimentacaoRepository.selecionarMovimentacaoPorSaida(saida);
        return resultado;
    },

    deletarMovimentacao: async (id) => {
        const resultado = await movimentacaoRepository.deletarMovimentacao(id);
        return resultado;
    },

    calcularEstoque: (estoqueAtual, entrada, saida) => {

        const entradaValor = entrada || 0;
        const saidaValor = saida || 0;

        const novoEstoque = estoqueAtual + entradaValor - saidaValor;

        return novoEstoque;
    },

    criarMovimentacao: async (movimentacao) => {

        const resultado = await movimentacaoRepository.criarMovimentacao(
            movimentacao.entrada,
            movimentacao.saida,
            movimentacao.dataMovimentacao,
            movimentacao.idProduto
        );

        return resultado;
    },

    atualizarMovimentacao: async (movimentacao) => {

        const resultado = await movimentacaoRepository.atualizarMovimentacao(
            movimentacao.id,
            movimentacao.entrada,
            movimentacao.saida,
            movimentacao.dataMovimentacao,
            movimentacao.idProduto
        );

        return resultado;
    }

};

export default movimentacaoService;
