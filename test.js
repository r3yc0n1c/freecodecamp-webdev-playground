URL = "https://random-word-api.herokuapp.com/word"

fetch(URL)
.then(res => res.json())
.then(data => console.log(data))