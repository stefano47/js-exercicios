let pessoa = {
    nome: 'Stefano',
    sobrenome: 'Paulo de Souza',
    idade: 23,
    social: {
        github: 'stefanopaulo',
        facebook: 'Stefano Paulo',
        instagram: {
            url: '@stefanopaulo'
        }
    }
}

// essas funções funcionam com arrays e objetos
console.log(Object.keys(pessoa)) // retorna as chaves do array ou objeto
console.log(Object.values(pessoa)) // retorna os valores do array ou objeto
console.log(Object.entries(pessoa)) // retorna um array com chave e valor