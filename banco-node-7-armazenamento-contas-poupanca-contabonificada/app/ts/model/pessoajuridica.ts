class PessoaJuridica extends Pessoa{
    readonly _cnpj:string;

    constructor(nome:string, idade:number, datanasc:Date, cnpj:string){
        super(nome + '-Jurídica', idade, datanasc);
        this._cnpj = cnpj;
    };

    getcnpj():string{
        return this._cnpj;};

    toString():string{
        return `Pessoa Juridica - Nome: ${this.getNome()}- CNPJ:${this.getcnpj()} - Idade: ${this.getIdade()} - Data de Nascimento: ${this.getDataNascimento()} `
    };
}