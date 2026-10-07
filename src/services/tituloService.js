import tituloRepository from "../repositories/tituloRepository.js";

const TAXA_DIARIA = 0.025; // 2,5% ao dia
const MS_DIA = 24 * 60 * 60 * 1000;

const arredondar = (n) => Math.round(n * 100) / 100;

function calcularDiasAtraso(dataVencimento) {

    const [ano, mes, dia] = dataVencimento.split("-").map(Number);

    const hoje = new Date();

    const utcHoje = Date.UTC(
        hoje.getFullYear(),
        hoje.getMonth(),
        hoje.getDate()
    );

    const utcVenc = Date.UTC(
        ano,
        mes - 1,
        dia
    );

    return Math.max(
        0,
        Math.round((utcHoje - utcVenc) / MS_DIA)
    );
}

function calcular(valor, diasAtraso) {

    // juros simples: valor * taxa * dias
    const juros = arredondar(
        valor * TAXA_DIARIA * diasAtraso
    );

    return {
        juros,
        valorFinal: arredondar(valor + juros)
    };
}

const tituloService = {

    recuperarTitulo: async () => {
        const resultado = await tituloRepository.selecionar();
        return resultado;
    },

    recuperarTituloPorId: async (tituloId) => {
        const resultado = await tituloRepository.selecionarPorId(tituloId);
        return resultado;
    },

    recuperarTituloPorValorOriginal: async (valorOriginal) => {
        const resultado = await tituloRepository.selecionarPorValorOriginal(valorOriginal);
        return resultado;
    },

    deletarTitulo: async (tituloId) => {
        const resultado = await tituloRepository.deletar(tituloId);
        return resultado;
    },

    criarTitulo: async (titulo) => {

        const diasAtraso = calcularDiasAtraso(
            titulo.dataVencimento
        );

        const resultadoCalculo = calcular(
            titulo.valorOriginal,
            diasAtraso
        );

        titulo.diasAtraso = diasAtraso;
        titulo.jurosCalculado = resultadoCalculo.juros;
        titulo.valorFinal = resultadoCalculo.valorFinal;

        const resultado = await tituloRepository.criar(
            titulo.valorOriginal,
            titulo.dataVencimento,
            titulo.diasAtraso,
            titulo.jurosCalculado,
            titulo.valorFinal
        );

        return resultado;
    },

    atualizarTitulo: async (titulo) => {

        const diasAtraso = calcularDiasAtraso(
            titulo.dataVencimento
        );

        const resultadoCalculo = calcular(
            titulo.valorOriginal,
            diasAtraso
        );

        titulo.diasAtraso = diasAtraso;
        titulo.jurosCalculado = resultadoCalculo.juros;
        titulo.valorFinal = resultadoCalculo.valorFinal;

        const resultado = await tituloRepository.atualizar(
            titulo.valorOriginal,
            titulo.dataVencimento,
            titulo.diasAtraso,
            titulo.jurosCalculado,
            titulo.valorFinal,
            titulo.id
        );

        return resultado;
    }
};

export default tituloService;