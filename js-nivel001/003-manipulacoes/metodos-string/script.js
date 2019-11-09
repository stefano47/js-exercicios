let nome = 'Stefano Paulo de Souza'

let resultado = nome.length // quantos caracteres tem na string
console.log(resultado)

resultado = nome.indexOf('Souza') // retorna a posição em quem a string passada começa, caso não ache retorna -1
console.log(resultado)

// EXTRAINDO INFORMAÇÕES DE UMA STRING
resultado = nome.slice(0, 13) // retorna um pedaço da string a partir da posição inicial até a posição final passadas como parâmetro
console.log(resultado)

resultado = nome.substring(0, 7)
console.log(resultado)

// mais utilizado
resultado = nome.substr(8, 5) // coloca a posição inicial, e a quantidade de caracteres que seja retornado
console.log(resultado)

// COMO SUBSTITUIR TRECHOS ESPECÍFICOS DE UMA STRING
resultado = nome.replace('Stefano Paulo de Souza', 'Pedro Paulo') // recebe dois parâmetros, o primeiro é o valor que vai ser substituido, o segundo é o valor que vai ser setado
console.log(resultado)

resultado = nome.toUpperCase() // todas as letras MAISCULAS
console.log(resultado)

resultado = nome.toLowerCase() // todas as letras minusculas
console.log(resultado)

resultado = nome.concat(' tem 23 anos.') // concatena a string com outra string passada por parâmetro
console.log(resultado)

resultado = nome.trim() // tira todos os espaçoes em branco do começo e do fim da string
console.log(resultado)

resultado = nome.charAt(3) // retorna o caractere da posição passada por parâmetro
console.log(resultado)

resultado = nome[8]
console.log(resultado)

resultado = nome.split(' ') // transforma uma string em um array
console.log(resultado)