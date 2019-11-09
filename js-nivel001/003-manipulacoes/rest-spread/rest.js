// rest
const add = (...numeros) => numeros.filter(i => i % 2 === 0)

let res = add(5, 6, 9, 8, 74)
console.log(res)