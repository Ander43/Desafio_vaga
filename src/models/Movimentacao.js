class Movimentacao {
    #id;
    #entrada
    #saida;
    #dataMovimentacao;
    #idProduto;
    
    
    constructor(entrada, saida, dataMovimentacao, idProduto, id = null){
        this.#entrada = entrada;
        this.#saida = saida;
        this.#dataMovimentacao = dataMovimentacao;
        this.#idProduto = idProduto;
        this.#id = id;
        
    }
    //id
    get id(){
        return this.#id;
    }
    //entrada
    get entrada(){
        return this.#entrada;
    }

    set entrada(value){
        this.#entrada = value;
    }

    //saida
    get saida(){
        return this.#saida;
    }

    set saida(value){
        this.#saida = value;
    }

    //dataMovimentacao
    get dataMovimentacao(){
        return this.#dataMovimentacao;
    }

    set dataMovimentacao(value){
        this.#dataMovimentacao = value;
    }

    //idProduto
    get idProduto(){
        return this.#idProduto;
    }

    set idProduto(value){
        this.#idProduto = value;
    }


}

export default Movimentacao;