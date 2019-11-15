const grupoA = 100
const grupoB = 200

const res = grupoA > grupoB ? grupoA : grupoB

console.log(res)

const areaRetangulo = (l, h) => {
    let res = l * h

    if(l === h) {
        console.log(`Quadrado: ${res}m²`)
    } else {
        console.log(`Retângulo: ${res}m²`)
    }
}

areaRetangulo(2, 2)
areaRetangulo(2, 6)