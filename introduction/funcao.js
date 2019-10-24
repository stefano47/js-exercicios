function soma(numero1, numero2) {
    // escopo local
    var resultado = numero1 + numero2

    return resultado
}

// escopo global
var resultado = soma(1, 2)

console.log(resultado)