class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getIdade() {
        return this._idade;
    }
    setIdade(idade) {
        this._idade = idade;
    }
    getDataNascimento() {
        return this._dataNascimento;
    }
    setDataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
    toString() {
        return `Nome: ${this._nome} - Idade: ${this._idade} - Data de Nascimento: ${this._dataNascimento}`;
    }
    ;
}
