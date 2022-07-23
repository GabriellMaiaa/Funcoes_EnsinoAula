/*const notas = [6.7, 7.9, 10, 5, 8.5, 7]

const soma = (a, b) => a + b;
const dividir = (a, b) => a / b;

const MediaNotas = dividir(notas.reduce(soma), notas.length);

console.log(`A média das notas é ${MediaNotas}`)

function dobro(x) {
    return x * 7
}
const teste = dobro(38);

console.log(teste)


const alunos = [
    {nome: "João", nota: 5.8},
    {nome: "Junior", nota: 7.1},
    {nome: "Jamilton", nota: 5},
    {nome: "Jubson", nota: 7.5},
    {nome: "Jacinto", nota: 10},
]

const alunosAprovados = aluno => aluno.nota >= 7;///// aluno É O PARÂMETROOOOO

const aprovado = alunos.filter(alunosAprovados);
console.log(aprovado);*////

function esperarPor(tempo) {
   const futuro =  Date.now() + tempo;
   while(Date.now() < futuro) {
}
}
 setTimeout(() => console.log("Exec#1"), 400)

esperarPor(5000);
console.log("Fimm!!!")
  