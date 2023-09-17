class PessoaJuridica extends Pessoa {
    constructor(nome, idade, datanasc, cnpj) {
        super(nome + '-Jurídica', idade, datanasc);
        this._cnpj = cnpj;
    }
    ;
    getcnpj() {
        return this._cnpj;
    }
    ;
    toString() {
        return `Pessoa Juridica - Nome: ${this.getNome()}- CNPJ:${this.getcnpj()} - Idade: ${this.getIdade()} - Data de Nascimento: ${this.getDataNascimento()} `;
    }
    ;
}
