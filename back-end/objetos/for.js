const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

for (let key in cliente) {
  let tipo = typeof cliente[key];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${key} tem o valor ${cliente[key]}`);
  }
}

// Exemplo // !!! IMPORTANTE

const paciente = {
  nome: "James T.",
  idade: 30,
  email: "jt@email.com",
  identicacao: "Alpha01259859",
  funcao: "comandante",
  peso: 80.1,
  altura: 1.8,
  calcularIMC: function() {
    return (this.peso/(Math.pow(this.altura,2))).toFixed(2)
  },
  nomeCompleto: function() {
    console.log(this.nome)
  }

};
const imc = paciente.calcularIMC();
console.log(imc);
