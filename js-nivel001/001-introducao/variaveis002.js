// alterações nas variáveis ES2015

// let -> escopo de bloco
{
    let nome = 'Stefano'
    console.log(`Nome: ${nome}`)
}
let idade = 23
// console.log(`Nome: ${nome}`) [erro]
// let idade = 24 [erro]
idade = 24
console.log(`Idade: ${idade}`)

// const -> usada para definir constantes
const hora = 21
// hora = 22 [erro]
console.log(hora)

const endereco = { rua: '77', numero: '194' }
console.log(endereco.rua)
endereco.rua = '78'
console.log(endereco.rua)

// vantagens do let e const -> evitam gastos de memória