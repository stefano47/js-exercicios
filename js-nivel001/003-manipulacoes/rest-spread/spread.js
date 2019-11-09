// spread com array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr0 = [...arr, 10, 11, 12, 13, 14, 15]

console.log(arr)
console.log(arr0)

// spread com objeto
let info = {
    nome: 'Stefano',
    sobrenome: 'Paulo de Souza',
    idade: 23
}

let info0 = {
    ...info,
    cidade: 'Fortaleza',
    estado: 'Ceará',
    pais: 'Brasil'
}

console.log(info)
console.log(info0)

// spread com função
const addInfo = info => {
    let novasInfo = {
        ...info,
        social: {
            github: 'stefanopaulo',
            instagram: {
                url: '@stefanopaulo_'
            },
            facebook: 'Stefano Paulo'
        }
    }

    return novasInfo
}

let res = addInfo(info)
console.log(res)