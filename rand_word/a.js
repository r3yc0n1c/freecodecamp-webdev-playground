function asd() {
    // URL = "https://random-word-api.herokuapp.com/word"
    URL = "https://api.quotable.io/random"

    fetch(URL)
        .then(res => res.json())
        .then(data => document.getElementById("box").innerHTML = data.content)
}

