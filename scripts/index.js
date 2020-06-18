var joke_here = document.getElementById("joke-here");
var joke_api = document.getElementById("joke-api");

fetch("https://joke3.p.rapidapi.com/v1/joke?nsfw=false", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "joke3.p.rapidapi.com",
        "x-rapidapi-key": "a876d4fd8bmsh750d1da40125042p1f91e3jsnd4309793c137"
    }
})

    .then(response => response.json())
    .then(data => {
        //Work with JSON data here
        var joke_source = document.createTextNode("Here is a joke from the Jokes API at rapidapi.com, Refresh the page to see another one. ");
        var joke_fetched = document.createTextNode(data.content);
        joke_here.appendChild(joke_fetched);
        joke_api.appendChild(joke_source);
    })
    .catch(err => {
        console.log(err);
    });



