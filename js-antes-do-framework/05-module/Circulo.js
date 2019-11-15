import numeroAleatorio from "./numeroAleatorio.js"

const areaCirculo = raio => Math.PI * raio

const circuferencia = raio => 2 * raio * Math.PI

const aleatorio = _ => numeroAleatorio()

const Circulo = {
  areaCirculo,
  circuferencia,
  aleatorio
}

export default Circulo