const clientes = require("../JSON/clientes");

function findClient(array, key, value) {
  return array.find((item) => item[key].includes(value));
}

const foundedClient = findClient(clientes, "telefone", "9916828153");
console.log(foundedClient);
