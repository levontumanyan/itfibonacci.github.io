// var apiEndpointBaseURL = "https://api.harvardartmuseums.org/image/465905";
// var apikey = "a29ebb20-9926-11ea-86ac-c90adf87ba2a";
// var store_image = document.getElementById("store-image");

// fetch(apiEndpointBaseURL + "?" + "apikey=" + apikey)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         // Work with JSON data here
//         var img_src = data.baseimageurl;
//         store_image.src = img_src;
//         console.log(data);
//     })
//     .catch(err => {
//         // Do something for an error here
//     })

// // store the div inside a variable 


// var apiEndpointBaseURL = "https://api.harvardartmuseums.org/image?q=width:<2000";
// var apikey = "a29ebb20-9926-11ea-86ac-c90adf87ba2a";
// var store_image = document.getElementById("store-image");

// fetch(apiEndpointBaseURL + "?" + "apikey=" + apikey)
//     .then(response => {
//         return response.json();
//     })
// .then(data => {
//     // Work with JSON data here
//     //var img_src = data.baseimageurl;
//     //store_image.src = img_src;
//     console.log(data);
// })
//     .catch(err => {
//         // Do something for an error here
//     })

// // store the div inside a variable 

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
        var joke_source = "Here is a joke from the Jokes API at rapidapi.com, Refresh the page to see another one. ";
        joke_here.innerHTML = data.content;
        joke_api.innerHTML = joke_source;
    })
    .catch(err => {
        console.log(err);
    });



