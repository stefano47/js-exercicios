let pessoas = [
    {
        nome: 'Stefano', 
        sobrenome: 'Paulo de Souza', 
        instagram: 
        {
            url: '@stefanopaulo_'
        }
    },

    {
        nome: 'Pedro',
        sobrenome: 'Paulo Araújo',
        instagram: {
            url: '@pedropf'
        }
    },

    {
        nome: 'Lucas',
        sobrenome: 'da Silva',
        instagram: {
            url: '@lucas_da_silva'
        }
    }
]

// Pegando o primeiro objeto do Array
let [{ nome: n, sobrenome: s, instagram: { url: i } }] = pessoas
console.log(`Nome completo: ${n} ${s}. Instagram: ${i}`)

// Pegando o segundo objeto do Array
let [ , { nome: no, sobrenome: sb, instagram: { url: ig } }] = pessoas
console.log(`Nome completo: ${no} ${sb}. Instagram: ${ig}`)

// Pegando o terceiro objeto do Array
let [ , , { nome, sobrenome, instagram: { url } }] = pessoas
console.log(`Nome completo: ${nome} ${sobrenome}. Instagram: ${url}`)