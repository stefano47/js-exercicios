// function showList(empresa, ...clientes) {
//   console.log(empresa);
//   console.log(clientes);
// }

// showList("Origamid", "João", "Maria", 10);

// const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

// console.log(Math.max(...numeros));

// const items = document.querySelectorAll("li");

// [...items].map(item => {
//   console.log(item);
// });

// console.log(items);

// const carro = { cor: "Azul", portas: 4, ano: 2020 };

// const cloneCarro2 = carro;

// const cloneCarro = { ...carro, turbo: true };

// rest
const showList = (empresa, ...clients) => {
  console.log(empresa)
  console.log(clients)
}

showList("St3", "João", "Maria")

const numeros = [1, 2, 4, 20, 9, 32, 2, 32, 45, 3]
// spread
console.log(Math.max(...numeros))

// const itens = document.querySelectorAll('li')
// console.log(itens)

// itens.map(item => console.log(item))

// const carro = { cor: "Azul", portas: 4, ano: 2020 }

// const cloneCarro = { ...carro, turbo: true }
// cloneCarro.ano = 2019
// console.log(cloneCarro)

class Transporte {
  constructor() {
    this.terrestre = true
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super()
    this.cor = cor
    this.portas = portas
  }
  andar() {
    console.log('Andou...')
  }
}

const carro = new Carro("Vermelho", 4)

const cloneCarro = { ...carro }

console.log(carro.andar())
console.log(cloneCarro)