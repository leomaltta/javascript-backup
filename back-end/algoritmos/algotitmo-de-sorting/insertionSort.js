const livros = require("../ordenando-livros/db-livros.json");

function insertionSort(arr) {
  for (let atual = 0; atual < arr.length; atual++) {
    let analise = atual;
    while (analise > 0 && arr[analise].preco < arr[analise - 1].preco) {
      let itemAnalise = arr[analise];
      let itemAnterior = arr[analise - 1];

      arr[analise] = itemAnterior;
      arr[analise - 1] = itemAnalise;

      analise--;
    }
  }
  console.log(arr);
}
insertionSort(livros);
