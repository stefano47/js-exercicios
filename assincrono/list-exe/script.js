const verificaIdade = idade => {
    return new Promise((resolve, reject) => {
        setTimeout(() => idade >= 18 ? resolve() : reject(), 2000)
    })
}

verificaIdade(3)
    .then(() => console.log("maior que 18"))
    .catch(() => console.log("menor que 18"))