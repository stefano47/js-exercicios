function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('[ERRO] faltam dados!!!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            alert('Passo inválido, considerando passo 1')
            p = 1
        }

        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}