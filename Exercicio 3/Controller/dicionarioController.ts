import { construirDicionario, ArvoreBuscaBinaria } from '../Model/arvoreBuscaBinaria';

export function buscarPalavra(chave: string, dicionario: ArvoreBuscaBinaria): boolean {
    return dicionario.buscar(chave);
}
