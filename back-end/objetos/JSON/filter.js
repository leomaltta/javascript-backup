const clientes = require("../JSON/clientes.json");

function apsSemComplemento(clientes) {
  return clientes.filter((clientes) => {
    return (
      clientes.endereco.apartamento &&
      !clientes.endereco.hasOwnProperty("complemento")
    );
  });
}

const apSC = apsSemComplemento(clientes);
console.log(apSC);
