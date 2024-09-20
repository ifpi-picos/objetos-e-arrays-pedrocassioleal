const aluno = {
    nome: "Maria Silva",
    idade: 21,
    curso: "Engenharia de Software",
    notas: [9.5, 8.7, 10.0, 7.8],
  
  
    imprimirDados: function() {
      console.log("Nome: " + aluno.nome);
      console.log("Idade: " + aluno.idade);
      console.log("Curso: " + aluno .curso);
      console.log("Notas: " + aluno.notas.join(", "));
    }
  };
  
  
  aluno.imprimirDados();