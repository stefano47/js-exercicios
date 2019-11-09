const fazer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('OK'), 3000)
    })
}

fazer()
    .then(resp => console.log(`Resposta: ${resp}`))