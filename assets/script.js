var cities = [];
var apiKey = '8f4d923c394cda45e37ed2095fd77995';

function displayCurrent(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        // put stuff on page
        console.log(data);
        fiveDay(city);
        uvIndex(data.coord.lat, data.coord.lon)
    })
}

function fiveDay(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        // put stuff on page
        console.log(data);
    })
}

function uvIndex(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        // put stuff on page
        console.log(data);
    })
}

$("#search").click(event => {
    event.preventDefault()
    var searchValue = $("#city").val()
    console.log(searchValue)
    displayCurrent(searchValue)
})

