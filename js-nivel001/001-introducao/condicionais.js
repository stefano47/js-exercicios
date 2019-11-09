// condicionais
var hora = 12

if(hora < 12) {
    console.log('Bom dia')
} else if(hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

if(hora == 12 || hora == 18) {
    console.log('Você está na hora do rush.')
}

var idade = 23
var verificaIdade = idade < 18 ? 'menor de idade' : 'maior de idade'
console.log(verificaIdade)