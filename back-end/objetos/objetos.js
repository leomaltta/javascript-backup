const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "cpf", "11123323"];

console.log(informacoesPessoa);

const objetoPessoa = {
  nome: "Jose",
  idade: 32,
  cpf: "11123323",
};

//acessando com ponto
const cliente = {
  nome: "Andrew",
  idade: 32,
  cpf: "1112332331232",
  email: "andrew@dominio.com",
};

console.log(cliente.nome, cliente.idade);

console.log(cliente.cpf.substring(0, 3));

//acessando com colchete
console.log(cliente["nome"], cliente["idade"]);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})
