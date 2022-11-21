const endereco = {

rua: "AvBrasil",
numero: 81,
complemento: "Atrás da casa azul",
bairro: "San Martin",
cep: 984573189,
cidade: "São Paulo",
estado: "São Paulo",
pais: "Brasil"



}


const usuario = {
nome: "Pedro",
email: "eusoupedro@gmail.com",
telefone: 94538765,
data_nascimento: 23.4,
...endereco

}
console.log(usuario)
