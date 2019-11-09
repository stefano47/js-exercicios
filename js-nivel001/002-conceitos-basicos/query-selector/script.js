let subtitulos = document.querySelectorAll('.subtitulo')
console.log(subtitulos[1])

for(let v in subtitulos) {
    subtitulos[v].style.color = '#f00'
}

let titulo = document.querySelector('#titulo')
console.log(titulo)