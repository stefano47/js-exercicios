const url = "https://ranekapi.origamid.dev/wp-json/api/produto"

const fetchProdutos = async url => {
  const response = await fetch(url)
  const jsonBody = await response.json()
  return jsonBody
}

fetchProdutos(url)