/*

1. Crie um loop "for" que imprima números de 0 a 10.

2. Loop com condição: Crie um loop "for" que imprima somente números ímpares de 0 a 20.

3. Usando "while": Crie um loop "while" que imprima números de 0 a 10.

4. Interrompendo um loop: Crie um loop "for" que imprima números de 0 a 100, mas interrompa a execução quando chegar ao número 50.

5. Pulando uma iteração: Crie um loop "for" que imprima números de 0 a 20, mas pule a impressão do número 13.

6. Iterando um Array: Crie um array de nomes e use um loop "for...of" para imprimir cada nome do array.

*/

for(let num = 0; num < 11; num++){
    console.log(num);
};

console.log("Próximo exercício 2");

for(let i = 0; i < 21; i++){
    let num = i
    num%=2
    if (num == 0) {
        console.log(i);
    }
};

console.log("Próximo exercício 3");

let num = 0; while (num < 11) {
	console.log(num); num++;
};

console.log("Próximo exercício 4");

for(let i = 0; i < 101; i++){
    if( i == 50 ){
        console.log("50 \nfoi achado! \nEncerrando...");
        break;
    } else{
        console.log(i);
    };
};

console.log("Próximo exercício 5");

for(let i = 0; i < 21; i++){
    if( i == 13 ){
        continue;
    } else{
        console.log(i);
    };
};

console.log("Próximo exercício 6 \n");

let nomes = ["Felipe", "Erson", "Tatiane", "Kauan", "Manoel", "Francisca"];

for (let nome of nomes) {
    console.log(nome);
}
