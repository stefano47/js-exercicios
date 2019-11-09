let pessoa = {
    nome: 'Stefano',
    idade: 23,
    peso: 105.63,
    bebi: true,
    // dentro de um objeto função vira método
    falar() {
        console.log(`Olá, meu nome é ${this.nome = 'Pedro'}, tenho ${this.idade = 27} anos.`)
    }
}

pessoa.falar()

let carros = [
    { nome: 'Fiat', modelo: 'Uno' },
    { nome: 'Fiat', modelo: 'Palio' },
    { nome: 'Toyota', modelo: 'Corolla' },
    { nome: 'Ferrari', modelo: 'Spider' }
]

console.log(carros[2].modelo)
console.log(carros.length)