var amigo = {
    nome:'José',
    sexo: 'm',
    peso: 84.5,
    engordar(p = 0) {
        this.peso += p
    }
}

amigo.engordar(9) // engordando o amigo
console.log(`${amigo.nome} pesa ${amigo.peso}`)