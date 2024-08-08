/*
1. Criar e Adicionar Pares Chave-Valor no Map:
Crie um Map chamado livros e adicione nele três pares de chave-valor, onde a chave é o título do livro e o valor é o autor.

2. Acessar Valor no Map:
Acesse o valor associado a uma das chaves no Map livros que você criou e imprima o nome do autor.

3. Iterar Sobre um Map:
Use um loop for...of para iterar sobre o Map livros e imprimir todos os pares chave-valor.

4. Usando Métodos do Map: size, delete, has:
No seu Map livros, use o método size para imprimir o número de livros, delete para remover um livro pelo título e has para verificar se um livro ainda está no Map.

5. Map com Tipos de Chaves Diferentes:
Crie um Map chamado colecao que contém diferentes tipos de chaves (como string, number, object) e seus respectivos valores.
*/

let livros = new Map();

livros.set( "001" , "Autor 1");
livros.set("003", "Autor 2");
livros.set("002", "Autor 3");

console.log(livros.get("001"));

for(let livro of livros){
    console.log(livro);
};


console.log(livros.size);
livros.delete("003");
console.log(livros.has("003"));


const colecao = new Map();

colecao.set("umaString", "Este é um valor de string");
colecao.set(42, "Este é um valor de número");
colecao.set({tipo: "objeto", id: 1}, "Este é um valor de objeto");

for(let col of colecao){
    console.log(col);
};