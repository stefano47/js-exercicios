let data = new Date() // criando um objeto da classe Date()
console.log(data.toDateString()) // retorna a data um pouco mais formatada
console.log(data.toUTCString()) // retorna a data sem fuso horário

let res = data.getFullYear() // esse método retorna o ano a partir do objeto Date()
console.log(res)

res = data.getMonth() // retorna o mês 0 - 11
console.log(res)

res = data.getDay() // retorna o dia da semana 0 - 6
console.log(res)

res = data.getDate() // retorna o dia
console.log(res)

res = data.getHours() // retorna a hora
console.log(res)

res = data.getMinutes() // retorna os minutos
console.log(res)

res = data.getSeconds() // retorna os segundos
console.log(res)

res = data.getMilliseconds() // retorna os milisegundos
console.log(res)

res = data.getTime() // retorna a quantidade de milisegundos de 1 de janeiro de 1970 ate a data atual
console.log(res)

// MANIPULAÇÕES DE DATA
res = data.setFullYear(2022) // valor do ano
console.log(res)

res = data.setMonth(6) // valor do mês
console.log(res)

res = data.setDate(15) // valor do dia
console.log(res)