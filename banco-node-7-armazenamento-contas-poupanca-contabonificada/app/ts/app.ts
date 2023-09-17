let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const pessoateste = new Pessoa("BOB", 40, new Date("1983-06-28"));
const pessoafisicateste = new PessoaFisica("ALICE", 29, new Date("1994-03-12"), "001.002.003-04");
const pessoajuridicateste = new PessoaJuridica("Empresa LORE IPSUM", 7, new Date("2016-05-07"), "12.345.678/9101-11");

console.log("Pessoa:");
console.log(pessoateste.toString());

console.log("\nPessoa Física:");
console.log(pessoafisicateste.toString());

console.log("\nPessoa Jurídica:");
console.log(pessoajuridicateste.toString());
