const xhr = new XMLHttpRequest()
const url = 'https://api.github.com/users/stefanopaulo'

xhr.open('GET', url)
xhr.send(null)

xhr.onreadystatechange = function() {
    if(xhr.onreadystatechange === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
}