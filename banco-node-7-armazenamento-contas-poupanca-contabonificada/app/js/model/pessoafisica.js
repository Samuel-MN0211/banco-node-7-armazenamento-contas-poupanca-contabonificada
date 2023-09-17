class PessoaFisica extends Pessoa {
    constructor(nome, idade, datanasc, cpf) {
        super(nome + '- Física', idade, datanasc);
        this._cpf = cpf;
    }
    ;
    getcpf() {
        return this._cpf;
    }
    ;
    toString() {
        return `Pessoa Física - Nome: ${this.getNome()}- CPF:${this.getcpf()} - Idade: ${this.getIdade()} - Data de Nascimento: ${this.getDataNascimento()} `;
    }
    ;
}
