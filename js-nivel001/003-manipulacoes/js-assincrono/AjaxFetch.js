const url = 'https://alunos.b7web.com.br/api/ping'

fetch(url)
    .then(resp => resp.json())
    .then(json => console.log(json))