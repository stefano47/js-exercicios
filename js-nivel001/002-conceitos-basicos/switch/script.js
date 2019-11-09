// Dia da semana

let dia = new Date()
let hoje = dia.getDay()
let diaNome = ''

switch(hoje) {
    case 1:
        diaNome = 'Segunda-Feira'
        break
    case 2:
        diaNome = 'Terça-Feira'
        break
    case 3:
        diaNome = 'Quarta-Feira'
        break
    case 4:
        diaNome = 'Quinta-Feira'
        break
    case 5:
        diaNome = 'Sexta-Feira'
        break
    case 6:
        diaNome = 'Sábado'
        break
    case 0:
        diaNome = 'Domingo'
        break
    default:
        diaNome = 'não é um dia válido'
}

console.log(diaNome)