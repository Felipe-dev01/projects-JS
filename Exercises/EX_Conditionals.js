/*
1) Classificação por Idade:
Escreva um programa que classifica uma pessoa em categorias de idade: 
"criança" (menos de 13 anos)
"adolescente" (entre 13 e 17 anos)
"adulto" (entre 18 e 64 anos)
"idoso" (65 anos ou mais), Use a estrutura `if/else/else if`.

2) Jogo de Adivinhação com Switch:
Desenvolva um jogo simples de adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. 
Use `switch` para verificar a escolha e imprimir se acertou ou não.

3) Avaliação de Notas:
Crie um programa que, dada uma nota de um aluno, classifica a nota como "Reprovado" (menos de 6)
 "Recuperação" (entre 6 e 7), ou "Aprovado" (mais de 7). Use `switch`.

*/

let idade = 86

if(idade <= 13){
    console.log("criança");
} else if(idade <= 17){
    console.log("adolescente");
} else if(idade <= 64){
    console.log("adulto");
} else{
    console.log("idoso");
};

console.log("Próximo exercício 2");

let num = 3
switch(num){
    case 1:
        console.log("Errou");
    break;
    case 2:
        console.log("Errou");
    break;
    case 3:
        console.log("Acertou");
    break;
    case 4:
        console.log("Errou");
    break;
    case 5:
        console.log("Errou");
    break;
    default:
        console.log("Número deve estar entre 1 e 5 !!!")
}

console.log("Próximo exercício 3");

let nota = 1;

switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Reprovado");
        break;
    case 6:
    case 7:
        console.log("Recuperação");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Aprovado");
        break;
    default:
        console.log("A nota deve estar entre 0 e 10 !!!");
}
