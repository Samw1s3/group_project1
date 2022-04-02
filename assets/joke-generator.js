const jokeButton = document.getElementById('generate-joke');
const jokeSetUp = document.getElementById('joke-setup');
const jokeDelivery = document.getElementById('joke-delivery');

let jokeURL = "https://v2.jokeapi.dev/joke/Any?safe-mode";

jokeButton.addEventListener('click', function(event){
    event.preventDefault();
    fetch(jokeURL)
    .then(response => response.json())
    .then (function (data){
        
        console.log(data.setup)
    jokeSetUp.textContent = data.delivery;
    jokeDelivery.textContent = data.setup;
    });
})