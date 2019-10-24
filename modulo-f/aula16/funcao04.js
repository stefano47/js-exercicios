// let fatorial = n => {
//     let fat = 1
//     for(let c = n; c > 1; c--) {
//         fat *= c
//     }
//     return fat
// }

// let res = fatorial(5)
// console.log(res)

// RECURSIVIDADE
let fatorial = n => {
    if(n === 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))