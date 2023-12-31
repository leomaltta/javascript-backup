const livros = require("../ordenando-livros/db-livros.json");
const menorValor = require("../ordenando-livros/menorValor");

for (let atual = 0; atual < livros.length; atual++) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);

// Alternativa de usar o forEach()

// livros.forEach((_, indice) => {
//   let menor = menorValor(livros, indice);

//   let livroAtual = livros[indice];
//   let livroMenorPreco = livros[menor];

//   livros[indice] = livroMenorPreco;
//   livros[menor] = livroAtual;
// });

// console.log(livros);