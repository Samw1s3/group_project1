let url = "http://www.boredapi.com/api/activity?participants=2"

let recURL = "https://www.boredapi.com/api/activity?type=recreational"

const activityText = document.getElementById('activity-text');

const actButton = document.getElementById('activity-button');

const recText = document.getElementById("reacreation-text");

const recButton = document.getElementById("recreation-button")
  // user hits button
actButton.addEventListener('click',function(event){
    event.preventDefault();

    fetch(url)
         .then(function (response) {
         return response.json();
        })
    .then(function (data) {
      console.log(data);
    
    const activity = data.activity

    activityText.textContent = activity

    console.log(data.activity);

    })
})

recButton.addEventListener('click',function(event){
    event.preventDefault();

    fetch(recURL)
         .then(function (response) {
         return response.json();
        })
    .then(function (data) {
      console.log(data);
    
    const activity = data.activity

    recText.textContent = activity

    console.log(data.activity);

    })
}

)    // random activity is displayed below the button
    