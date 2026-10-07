class Venda {
    #id;
    #valor;
    #comissao;
    #idVendedor;

    constructor(valor, comissao, idVendedor, id = null) {
        this.#valor = valor;
        this.#comissao = comissao;
        this.#idVendedor = idVendedor;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    get valor() {
        return this.#valor;
    }

    set valor(value) {
        this.#valor = value;
    }

    get comissao() {
        return this.#comissao;
    }

    set comissao(value) {
        this.#comissao = value;
    }

    get idVendedor() {
        return this.#idVendedor;
    }

    set idVendedor(value) {
        this.#idVendedor = value;
    }
}

export default Venda;
