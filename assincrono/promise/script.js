const url = 'https://api.github.com/users/stefanopaulo'

const minhaPromise = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição!!!')
                }
            }
        }
    })
}

minhaPromise()
    .then(response => console.log(response))
    .catch(error => console.warn(error))