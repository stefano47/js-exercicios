const url = 'https://api.github.com/users/stefanopaulo'

axios.get(url)
    .then(response => console.log(response.data.avatar_url))
    .catch(error => console.warn(error))