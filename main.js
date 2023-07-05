const alunos = [
  {
    "nome": 'Gabriel',
    "nota": 8
  },
  {
    "nome": 'Leila',
    "nota": 5
  },
  {
    "nome": 'Daniel',
    "nota": 7
  },
  {
    "nome": 'John',
    "nota": 2
  }
]

const alunosAprovados = alunos.filter(alunos => alunos.nota > 5)
console.log(alunosAprovados)