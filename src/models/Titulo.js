class Titulo {
    #id;
    #valorOriginal;
    #dataVencimento;
    #diasAtraso;
    #jurosCalculado;
    #valorFinal;

    constructor(
        valorOriginal,
        dataVencimento,
        diasAtraso = null,
        jurosCalculado = null,
        valorFinal = null,
        id = null
    ) {
        this.#valorOriginal = valorOriginal;
        this.#dataVencimento = dataVencimento;
        this.#diasAtraso = diasAtraso;
        this.#jurosCalculado = jurosCalculado;
        this.#valorFinal = valorFinal;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    get valorOriginal() {
        return this.#valorOriginal;
    }

    set valorOriginal(value) {
        this.#valorOriginal = value;
    }

    get dataVencimento() {
        return this.#dataVencimento;
    }

    set dataVencimento(value) {
        this.#dataVencimento = value;
    }

    get diasAtraso() {
        return this.#diasAtraso;
    }

    set diasAtraso(value) {
        this.#diasAtraso = value;
    }

    get jurosCalculado() {
        return this.#jurosCalculado;
    }

    set jurosCalculado(value) {
        this.#jurosCalculado = value;
    }

    get valorFinal() {
        return this.#valorFinal;
    }

    set valorFinal(value) {
        this.#valorFinal = value;
    }
}

export default Titulo;