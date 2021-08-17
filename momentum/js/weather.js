// user 위치정보 확인 
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
}

function onGeoError(){
  alert("Cannot find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);