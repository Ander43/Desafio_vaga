import produtoRepository from "../repositories/produtoRepository.js";


const produtoService = {
    recuperarProduto: async () => {
        const resultado = await produtoRepository.selecionar();
        return resultado;
    },
    recuperarProdutoPorid: async (produtoId) => {
        const resultado = await produtoRepository.selecionarPorId(produtoId);
        return resultado;
    },

    recuperarProdutoPorCodigoProduto: async (codigoProduto) => {
        const resultado = await produtoRepository.selecionarPorCodigoProduto(codigoProduto);
        return resultado;
    },

    recuperarProdutoPorDescricao: async (descricao) => {
        const resultado = await produtoRepository.selecionarPorDescricao(descricao);
        return resultado;
    },

    recuperarProdutoPorEstoqueAtual: async (estoqueAtual) => {
        const resultado = await produtoRepository.selecionarPorEstoqueAtual(estoqueAtual);
        return resultado;
    },

    deletarProduto: async (produtoId) => {
        const resultado = await produtoRepository.deletar(produtoId);
        return resultado;
    },

    criarProduto: async (produto) => {
        const resultado = await produtoRepository.criar(produto.codigoProduto, produto.descricao, produto.estoqueAtual);
        return resultado;
    },

    atualizarProduto: async (produto) => {
        const resultado = await produtoRepository.atualizar(produto.codigoProduto, produto.descricao, produto.estoqueAtual, produto.id);
        return resultado;
    }

    
};

export default produtoService;