function retornaSexo(sexo) {
    // if(sexo === 'M') {
    //     return 'MASCULINO'
    // } else if(sexo === 'F'){
    //     return 'FEMININO'
    // } else {
    //     return 'OUTRO'
    // }

    switch(sexo) {
        case 'M':
            return 'Masculino'
        case 'F':
            return 'Feminino'
        default:
            return 'Outro'
    }
}

var resultado = retornaSexo('Msds')

console.log(resultado)