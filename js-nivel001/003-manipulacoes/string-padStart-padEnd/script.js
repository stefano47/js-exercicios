let telefone = '5'

let res = telefone.padEnd(9, '*') // completa a string com o caractere passado por parâmetro
console.log(res)

res = telefone.padStart(9, '*') // preenche o inicio da string
console.log(res)

let cartao = '1234123412341234'

let lastDigits = cartao.slice(-4)

let cartaoMascarado = lastDigits.padStart(16, '*')

console.log(`Esse é o cartão que você deseja usar? ${cartaoMascarado}`)