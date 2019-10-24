function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if(num.value.length == 0) {
        alert('[ERRO] Por favor digíte um número!')
    } else {
        let n = Number(num.value)

        var c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}