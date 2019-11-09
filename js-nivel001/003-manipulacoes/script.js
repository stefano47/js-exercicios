const demoElement = document.querySelector('.demo')

let timer

const showTime = _ => {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    let txt = `${hora}:${min}:${sec}`

    demoElement.innerHTML = txt
}

const comecar = _ => timer = setInterval(showTime, 1000) 

const parar = _ => clearInterval(timer)