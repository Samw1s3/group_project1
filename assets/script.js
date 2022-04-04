
// let url = "https://sv443.net/jokeapi/v2"

// let response = fetch('https://joke3.p.rapidapi.com/v1/joke');

// const demoDiv = document.getElementById("joke-card");

const jokeButton = document.getElementById("generate-joke")
const jokeSetUp = document.getElementById("joke-setup")
const jokeDelivery = document.getElementById("joke-delivery")

jokeButton.addEventListener('click', function(event){
    

    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(response => response.json())
    .then (function (data){
        console.log(data)
        console.log(data.setup)
   
   
    jokeSetUp.innerHTML = data.delivery
    jokeDelivery.innerHTML = data.setup
    
  
    });
  
    
})

