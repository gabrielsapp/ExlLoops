const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
const jovens = []

const adultos = []

for (const i of usuarios) {
    if(i.idade <= 17){
        jovens.push(i)
    }else{
        adultos.push(i)
    }
}
console.log(jovens);
console.log(adultos)

