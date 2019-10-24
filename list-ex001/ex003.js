function temHabilidades(skills) {
    let res = skills.indexOf('Javascript')
    
    if(res !== -1) {
        return true
    } else {
        return false
    }
}

var skills = ['React', 'Vue', 'Javascript', 'PHP']

let res = temHabilidades(skills)
console.log(res) // true

skills = ['Java', 'PHP', 'Node']
res = temHabilidades(skills)
console.log(res)
