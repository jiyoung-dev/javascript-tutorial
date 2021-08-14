const clock = document.querySelector("h2#clock");

function sayHello(){
  console.log("hello");
}

// setInterval(sayHello, 5000);  // delay 간격 만큼 함수를 반복적으로 호출 
setTimeout(sayHello, 5000);  // delay 후에 함수 호출 (반복호출 아님)