let complimentURL = "https://complimentr.com/api"

// when user hits button, generate and show answer (compliment)
const complimentButton = document.getElementById('compliment-button');
const complimentText = document.getElementById('compliment-text')

complimentButton.addEventListener('click', function(event) {
    event.preventDefault();

    fetch(complimentURL)
        .then(function (response) {
            console.log("compliment",response)
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            const compliment = data.compliment;
            complimentText.textContent = compliment;
            console.log(data.compliment);
        })
})


