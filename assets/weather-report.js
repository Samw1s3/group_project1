const weatherApiKey = "8b5fae56d0f774f071b372096e2bef5b";

function gotPosition(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    console.log(lat);
    console.log(long);
    getForecast(lat, long);
}

function getForecast(lat, long){
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${weatherApiKey}`;
    getWeatherText(url);
}

async function getWeatherText(url) {
    let weatherObject = await fetch(url);
    let weatherText = await weatherObject.text();
    parseWeather(weatherText);
}

let parseWeather = function(weatherText) {
    let weatherJSON = JSON.parse(weatherText);
    let dailyForecast = weatherJSON.daily;
    console.log(dailyForecast);
    for (x = 0; x < 3; ++x) {
        let day = dailyForecast[x];
        let today = new Date().getDay() + x;
        if (today > 6) {
            today = today - 7;
        }
        console.log("today is",today);
        let dayOfWeek = getDayOfWeek(today);
        let description = day.weather[0].description;
        let icon = day.weather[0].icon;
        let sunset = timestampToTime(day.sunset);
        let highTemp = day.temp.max;
        let lowTemp = day.temp.min;
        let humidity = day.humidity;
        displayWeatherDay(dayOfWeek, description, icon, sunset, highTemp, lowTemp, humidity)
    }
}

let displayWeatherDay = function(dayOfWeek, description, icon, sunset, highTemp, lowTemp, humidity){
    let out = "<div class='weatherDay'><img src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>"
    out += "<h2>" + dayOfWeek + "</h2>";
    out += "<h3>" + description + "</h3>";
    out += "<p>Sunset: " + sunset + "</p>";
    out += "<p>High Temperature: " + highTemp + "°C</p>";
    out += "<p>Low Temperature: " + lowTemp + "°C</p>";
    out += "<p>Humidity: " + humidity + "%</p>";
    document.getElementById("forecast").innerHTML += out;
    
}

let getDayOfWeek = function(dayNum) {
    var weekday = new Array(7);
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"

    return weekday[dayNum];

}

let timestampToTime = function(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = "";
    if (date.getMinutes() < 10) {
        minutes = "0" + date.getMinutes();
    } else {
        minutes = date.getMinutes();
    }
    return hours +  ";" + minutes;
}

navigator.geolocation.getCurrentPosition(gotPosition);