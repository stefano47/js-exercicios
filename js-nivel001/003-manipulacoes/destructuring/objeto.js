let pessoa = {
    nome: 'Stefano',
    sobrenome: 'Paulo de Souza',
    idade: 23,
    social: {
        github: 'stefanopaulo',
        instagram: {
            url: '@stefanopaulo_',
            seguidores: 1000
        },
        facebook: 'Stefano Paulo'
    }
}

let { nome: n, sobrenome: s, idade: i } = pessoa
console.log(`${n} ${s}, ${i} anos.`)

let { social:{ instagram: { url: ig } } } = pessoa
console.log(`Siga em nosso instagram: ${ig}`)

let nomeCompleto = ({ nome, sobrenome }) => `${nome} ${sobrenome}`
console.log(nomeCompleto(pessoa))