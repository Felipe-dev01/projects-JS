/*
1. Função que Calcula a Área de um Retângulo: Crie uma função que calcula a área de um retângulo dado largura e altura.

2. Função para Verificar Número Par: Faça uma função que recebe um número e retorna `true` se for par e `false` se for ímpar.

3. Converter Polegadas em Centímetros: Escreva uma função que converte polegadas em centímetros.

4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).

5. Maiúsculas para Minúsculas: Crie uma função que recebe uma string e retorna a mesma string em letras minúsculas.

6. Crie uma arrow function chamada `multiplicaPorDez` que recebe um número como parâmetro e retorna o valor multiplicado por 10.
*/

function area_ret(larg, alt) {
    return larg * alt;
};

function num_verif(num) {
    let mod = 0;
    mod %= num ;
    if (mod == 0) {
        return true;
    } else {
        return false;
    };
};

function IMC(peso, alt) {
    let imc = 0;
    return imc = peso/(alt*alt);;
}

function convert_pol(polegadas) {
    return polegadas * 2,54;
};

function covert_text(text) {
    return text.toLowerCase();
    // toUpperCase();
};

let multiplicaPorDez = (a) => a * 10;

let resultado_area = area_ret(2, 4);
    console.log("A área do retângulo é " + resultado_area);

let verif = num_verif(5);
    console.log(verif);

let cent = convert_pol(5);
    console.log(cent);

let calcu_imc = IMC(100, 1.89);
    console.log("O seu IMC é: " + calcu_imc.toFixed(2));

let text = covert_text("FELIPE");
    console.log(text);

let multi_10 = multiplicaPorDez(2);
console.log(multi_10);