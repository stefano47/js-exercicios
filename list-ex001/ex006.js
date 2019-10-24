var arr = [5, 3, 2, 6, 9, 8, 7, 4, 1, 23]

var c = 0, soma = 0

while(c <= arr.length) {
    soma += arr[0] + arr[1]
    c++
}

console.log(soma, c)