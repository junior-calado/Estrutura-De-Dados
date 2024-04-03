import * as fs from 'fs';

class NoArvore {
    chave: string;
    esquerda: NoArvore | null;
    direita: NoArvore | null;

    constructor(chave: string) {
        this.chave = chave;
        this.esquerda = null;
        this.direita = null;
    }
}

export class ArvoreBuscaBinaria {
    raiz: NoArvore | null;

    constructor() {
        this.raiz = null;
    }

    inserir(chave: string): void {
        this.raiz = this._inserirRecursivo(this.raiz, chave);
    }

    private _inserirRecursivo(raiz: NoArvore | null, chave: string): NoArvore {
        if (raiz === null) {
            return new NoArvore(chave);
        }

        if (chave < raiz.chave) {
            raiz.esquerda = this._inserirRecursivo(raiz.esquerda, chave);
        } else if (chave > raiz.chave) {
            raiz.direita = this._inserirRecursivo(raiz.direita, chave);
        }

        return raiz;
    }

    buscar(chave: string): boolean {
        return this._buscarRecursivo(this.raiz, chave.toLowerCase());
    }

    private _buscarRecursivo(raiz: NoArvore | null, chave: string): boolean {
        if (raiz === null) {
            return false;
        }

        if (chave === raiz.chave.toLowerCase()) {
            return true;
        } else if (chave < raiz.chave) {
            return this._buscarRecursivo(raiz.esquerda, chave);
        } else {
            return this._buscarRecursivo(raiz.direita, chave);
        }
    }
}

export function construirDicionario(nomeArquivo: string): ArvoreBuscaBinaria {
    const arvore = new ArvoreBuscaBinaria();
    const palavras = fs.readFileSync(nomeArquivo, 'utf-8').split('\n');
    for (const palavra of palavras) {
        const palavraLimpa = palavra.trim().toLowerCase();
        if (palavraLimpa.length > 0) {
            arvore.inserir(palavraLimpa);
        }
    }
    return arvore;
}
