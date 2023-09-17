class PessoaFisica extends Pessoa{
    readonly _cpf:string;
    
    constructor(nome:string, idade:number, datanasc:Date, cpf:string){
        super(nome + '- Física', idade, datanasc);
        this._cpf = cpf;
    };
    
    getcpf():string{
        return this._cpf};

    toString():string{
        return `Pessoa Física - Nome: ${this.getNome()}- CPF:${this.getcpf()} - Idade: ${this.getIdade()} - Data de Nascimento: ${this.getDataNascimento()} `
    };
}