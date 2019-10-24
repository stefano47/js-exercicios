let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o = ${num}`)
console.log(`O comprimento do vetor é ${num.length}`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
console.log(`A ordem crescente do vetor é ${num.sort()}`)

// for(var v = 0; v < num.length; v++) {
//     console.log(num[v])
// }

// for(v of num) {
//     console.log(v)
// }

for(let v in num) {
    console.log(num[v])
}

console.log(`O valor está na posição ${num.indexOf(8)}`)