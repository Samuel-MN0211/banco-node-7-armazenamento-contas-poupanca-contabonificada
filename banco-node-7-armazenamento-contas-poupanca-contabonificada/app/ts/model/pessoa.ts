class Pessoa {
    private _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    getNome(): string {
        return this._nome;
    }

    setNome(nome: string): void {
        this._nome = nome;
    }

    getIdade(): number {
        return this._idade;
    }

    setIdade(idade: number): void {
        this._idade = idade;
    }

    getDataNascimento(): Date {
        return this._dataNascimento;
    }

    setDataNascimento(dataNascimento: Date): void {
        this._dataNascimento = dataNascimento;
    }
    toString():string{
        return `Nome: ${this._nome} - Idade: ${this._idade} - Data de Nascimento: ${this._dataNascimento}`;
    };
}