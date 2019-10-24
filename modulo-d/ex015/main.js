function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        // img.src = 'fotomanha.png'
        document.body.style.background = '#e3cd9f'
    } else if(hora >= 12 && hora < 18) {
        // img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}