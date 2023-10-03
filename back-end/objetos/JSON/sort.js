const clientes = require("../JSON/clientes");

function orderIt(array, param) {
  const result = array.sort((a, b) => {
    if (a[param] < b[param]) {
      return -1;
    }
    if (a[param] > b[param]) {
      return 1;
    }
    return 0;
  });
  return result;
}

const orderByName = orderIt(clientes, "nome");
console.log(orderByName);

// Exemplo
function ordenar(lista, propriedade, ordem = "crescente") {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  if (ordem !== "crescente") {
    resultado.reverse();
  }

  return resultado;
}
