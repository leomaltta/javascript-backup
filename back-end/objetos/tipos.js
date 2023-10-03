const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1133444440"],
};

//console.log(cliente.telefone);

//Objetos em objetos
// cliente.endereco = {
//   logradouro: "Rua ABC",
//   numero: 123,
//   cidade: "São Paulo",
//   apartamento: true,
//   complemento: "ap 123",
// };

// ! Listas de objetos

cliente.enderecos = [
  {
    logradouro: "Rua ABC",
    numero: 123,
    cidade: "São Paulo",
    apartamento: true,
    complemento: "ap 123",
  },
];

cliente.enderecos.push({
  logradouro: "Rua CDI",
  numero: 2223,
  cidade: "Maceió",
  apartamento: false,
});

//console.log(cliente);

const somenteAps = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

//console.log(somenteAps)

// ! Funções em objetos

const cliente1 = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1133444440"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente1.efetuaPagamento(25);

// ! Object.create() {criar um objeto baseado em outro, contornar a indicação de memória de objetos}

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome)
console.log(objPersonagem2.nome)