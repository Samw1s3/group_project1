let url = "http://www.boredapi.com/api/activity?participants=2"

fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })

    // user hits button
    // random activity is displayed below the button
    