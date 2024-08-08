/*

1. Adicionando Elementos a um Array:
Declare um array chamado "animais" e adicione três nomes de animais usando o método "push".

2. Removendo o Primeiro Elemento do Array:
A partir do array "animais" criado anteriormente, remova o primeiro elemento usando "shift" e imprima o array modificado.

3. Inserindo Elementos no Início do Array:
Utilize o método "unshift" para adicionar dois novos animais no início do array "animais".

4. Alterando Elementos Específicos do Array:
Mude o segundo elemento do array "animais" para "Cavalo".

5. Usando Length para Contar Elementos:
Declare um array "frutas" e adicione algumas frutas a ele. Use "length" para imprimir o número total de frutas no array.

6. Percorrendo um Array com Loop For:
Utilize um loop "for" para percorrer o array "frutas" criado e imprimir cada fruta individualmente.

*/

let animais = [];
    animais.push("Leão", "Cachorro", "Girafa");
    animais.shift();
    console.log(animais);
    animais.unshift("Papagaio", "Elefante");
    animais[1] = "Cavalo";
    console.log(animais.length);

    console.log("Ex 2")

let frutas = [];
    frutas.push("Abacaxi", "Abacate", "Amora", "Goiaba", "Graviola", "Groselha");
    console.log(frutas.length);
    for(let fruta of frutas) {
        console.log(fruta);
    };
