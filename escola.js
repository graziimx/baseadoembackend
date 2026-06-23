const dadosDoAluno = require('./aluno.json');

console.log("--- Sistema escolar ---");
console.log(`Nome: ${dadosDoAluno.nome}`);
console.log(`Curso: ${dadosDoAluno.curso}`);
console.log (`Idade : ${dadosDoAluno.idade}`);
if (dadosDoAluno.bolsista) {
    console.log ("Status: Este aluno possui isenção de mensalidade.");
} else{
  console.log("Status: Mensalidade padrão");
};

//Alterar o tipo de bolsa
//Adicione a saida idade

//Criar um arquivo chamado aluno2 json com 5 propriedades
