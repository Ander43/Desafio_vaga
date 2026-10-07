class Vendedor {
    #id;
    #nome;

    constructor(nome, id = null) {
        this.#id = id;
        this.#nome = nome;
        
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }
}

export default Vendedor;
