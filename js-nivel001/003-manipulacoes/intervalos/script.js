// aula 002
setTimeout(() => console.log('Olá depois de 3 segundos... :)'), 3000)

// aula 001
const demoElement = document.querySelector('.demo')

let timer

const showTime = () => {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    let txt = `${hora}:${min}:${sec}`

    demoElement.innerHTML = txt
}

const comecar = () => {
    timer = setInterval(showTime, 1000) 
}

const parar = () => {
    clearInterval(timer)
}