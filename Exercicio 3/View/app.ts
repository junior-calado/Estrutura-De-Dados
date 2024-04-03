import { construirDicionario, ArvoreBuscaBinaria } from '../Model/arvoreBuscaBinaria';
import { buscarPalavra } from '../Controller/dicionarioController';

const dicionario = construirDicionario("palavras_chave.txt");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite a palavra que deseja verificar no dicionário (ou 'sair' para sair): ", (palavra: string) => {
    const palavraLimpa = palavra.trim().toLowerCase();
    if (palavraLimpa === 'sair') {
        readline.close();
        return;
    }

    if (buscarPalavra(palavraLimpa, dicionario)) {
        console.log("A palavra está no dicionário.");
    } else {
        console.log("A palavra não está no dicionário.");
    }
    readline.close();
});
