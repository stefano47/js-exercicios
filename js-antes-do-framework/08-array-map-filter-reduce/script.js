const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados"
]

// filter
const precosFiltro = precos.filter((preco) => preco.includes('R$'))

console.log(precosFiltro)

// map
const precosNumeros = precosFiltro.map(preco => Number(preco.replace('R$ ', '')))

console.log(precosNumeros)

// reduce
const total = precosNumeros.reduce((acc, item) => acc + item)

console.log(total)
