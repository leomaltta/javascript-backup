const livros = require("./db-livros.json");

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

module.exports = menorValor;

// Math.min & spread operator(...)
const bookPrices = [25, 15, 30, 50, 45, 20];
const cheaper = Math.min(...bookPrices);
//console.log(cheaper);
