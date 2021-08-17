const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "f0f6390c45c893b352d575905fc41b22";

// user 위치정보 확인 
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Using open weather map API
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}, ${data.main.temp}℃`;
    });
}

function onGeoError(){
  alert("Cannot find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);