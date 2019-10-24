// function pares(num1, num2) {
//     var maior = 0, menor = 0

//     if(num1 > num2) {
//         maior += num1
//         menor += num2
//     } else {
//         maior += num2
//         menor += num1
//     }

//     for(var c = menor; c <= maior; c++) {
//         if(c % 2 === 0) {
//             console.log(c)
//         }
//     }
// }

// pares(32, 111)
// pares(99, 5)

function pares(num1, num2) {

    if(num1 > num2) {
        for(let c = num1; c >= num2; c--) {
            if(c % 2 === 0){
                console.log(c)
            }
        }
    } else {
        for(let c = num1; c <= num2; c++) {
            if(c % 2 === 0) {
                console.log(c)
            }
        }
    }

}

pares(32, 111)
pares(99, 5)
