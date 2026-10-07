class Produto {
    #id;
    #codigoProduto;
    #descricao;
    #estoqueAtual;

    constructor(codigoProduto, descricao, estoqueAtual, id = null){
        this.#codigoProduto = codigoProduto;
        this.#descricao = descricao;
        this.#estoqueAtual = estoqueAtual;
        this.#id = id;
        
    }
    //id
    get id(){
        return this.#id;
    }
    //descrição
    get descricao(){
        return this.#descricao;
    }

    set descricao(value){
        this.#descricao = value;
    }

    //código do produto
    get codigoProduto(){
        return this.#codigoProduto;
    }

    set codigoProduto(value){
        this.#codigoProduto = value;
    }

    //estoque
    get estoqueAtual(){
        return this.#estoqueAtual;
    }

    set estoqueAtual(value){
        this.#estoqueAtual = value;
    }

    
}

export default Produto;