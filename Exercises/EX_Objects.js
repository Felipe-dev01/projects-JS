/*
1. Criar e Acessar um Objeto:
Crie um objeto chamado "carro" com propriedades como "marca", "modelo" e "ano". Em seguida, acesse e imprima a propriedade "modelo" do objeto.

2. Adicionar e Modificar Propriedades de um Objeto:
A partir do objeto "carro` criado, adicione uma propriedade "cor" e modifique o "ano" do carro. Imprima o objeto modificado.

3. Criar um Método em um Objeto:
Crie um objeto chamado "calculadora" com um método "soma" que aceite dois números e retorne a soma deles.

4. Iterar Sobre as Propriedades de um Objeto:
Dado um objeto, use um loop "for...in" para iterar sobre todas as suas propriedades e imprimir cada uma delas.

5. **Entendendo Referências de Objetos:
Crie um objeto "livro" com propriedades como "titulo" e "autor". Em seguida, crie outra variável que referencie o objeto "livro" e modifique a propriedade "titulo". Verifique se o objeto original foi alterado.

6. Usando Métodos Avançados de Objeto:
Dado um objeto, use o método "Object.keys()" para listar todas as chaves do objeto. Repita o processo com "Object.values()" para listar todos os valores.
*/

let carro = {
    marca: "BYD",
    modelo: "Dolphin",
    ano: 2022
};
    console.log(carro.modelo);
    carro.cor = "verde";
    carro.ano = 2024;
    console.log(carro);

let calculadora = {
    soma: function(a, b) {
       return a + b;
    },
}
let num = calculadora.soma(10, 10);
console.log(num);

for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
  };

let livro = {
    titulo: "O programador",
    autor: "Felipe Farias"
  };

let livro_atual = livro;
livro_atual.titulo = "programador";
console.log(livro);

console.log(Object.keys(carro) + "\n & \n" + Object.values(carro));

