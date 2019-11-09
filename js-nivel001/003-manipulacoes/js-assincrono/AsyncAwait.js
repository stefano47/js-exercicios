const requisitar = async () => {
    const url = 'https://alunos.b7web.com.br/api/ping'

    const resp = await fetch(url)
    const json = await resp.json()

    console.log(json)
}

requisitar()