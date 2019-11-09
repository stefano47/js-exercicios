let lista = ['ovo', 'farinha', 'corante', 'massa']

let res = lista.toString() // transforma um array em uma string
console.log(res)

res = lista.join(' - ') // transforma um arrayn em uma string, e separa pelo caractere que for passado por parâmetro
console.log(res)

res = lista.indexOf('massa') // percorre o array procurando a posição do item passado no parâmetro
console.log(res)

lista.pop() // remove o último item do array
console.log(lista)

lista.shift() // remove o primeiro item do array
console.log(lista)

lista.push('massa') // add um novo item na última posição do array
console.log(lista)

lista = ['ovo', 'farinha', 'corante', 'massa']

lista[0] = 'ovos' // alterando o valor de um array
console.log(lista)

lista[lista.length] = 'açucar'
console.log(lista)

delete lista[1] // deleta o item mas mantém o índice
console.log(lista)

lista.splice(1, 1) // remove a partir do indice passado, o número de itens passados
console.log(lista)

lista.sort() // ordena o array em ordem crescente
console.log(lista)

lista.reverse() // inverte a ordem do array
console.log(lista)

lista = [45, 4, 9, 16, 25]
console.log(lista)

// map sempre gera um novo array
res = lista.map(i => i * 2)
console.log(res)
console.log(lista)

// filter sempre gera um novo array menor ou igual ao primeiro
res = lista.filter(i => i < 20)
console.log(res)
console.log(lista)

// retorna true ou false &&
res = lista.every(i => i > 20)
console.log(res)

// retorna true ou false ||
res = lista.some(i => i > 20)
console.log(res)

// retorna o primeiro item que satisfaça a condição
res = lista.find(i => i === 16)
console.log(res)

// retorna a posição do item
res = lista.findIndex(i => i === 16)
console.log(res)

lista = [
    { id: 1, nome: 'Stefano', sobrenome: 'Souza' },
    { id: 2, nome: 'Pedro', sobrenome: 'Araújo' },
    { id: 3, nome: 'Lucas', sobrenome: 'Silva' }
]
console.log(lista)

res = lista.find(i => i.id === 2)
console.log(res)