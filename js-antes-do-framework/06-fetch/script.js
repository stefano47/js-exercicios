const url = "https://ranekapi.origamid.dev/wp-json/api"

fetch(`${url}/produto`)
  .then(response => response.json()) // função que ocorre após a Promise ser resolvida
  .then(jsonBody => {
    document.querySelector('#app').innerHTML = jsonBody[0].nome
    console.log(jsonBody)
  }) // objeto final da resposta da Promise

const data = {
  id: "stefano.php",
  nome: "Stefano",
  email: "stefano@origamid.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Botafogo",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro"
}

fetch(`${url}/usuario`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})