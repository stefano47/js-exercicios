function alterar() {
    var campo = document.getElementById('campo')
    document.getElementById('botao').onclick = function() {
        document.getElementById('titulo').innerHTML = campo.value
        campo.value = ''
    }
}

alterar()

function alterarEnter(e) {
    if(e.keyCode === 13) { // tecla Enter
        let campo = document.getElementById('campo')
        document.getElementById('titulo').innerHTML = campo.value
        campo.value = ''
    }
}

function limpar() {
    document.getElementById('titulo').classList.remove('azul')
    document.getElementById('titulo').classList.remove('vermelho')
    document.getElementById('titulo').classList.remove('verde')
}

function azul() {
    limpar()
    document.getElementById('titulo').classList.add('azul')
}

function vermelho() {
    limpar()
    document.getElementById('titulo').classList.add('vermelho')
}

function verde() {
    limpar()
    document.getElementById('titulo').classList.add('verde')
}