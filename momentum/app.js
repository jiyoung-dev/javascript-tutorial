const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// form submit은 기본적으로 브라우저 새로고침 후에 동작한다.  
function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본동작을 막아주는 함수 
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){  //local Storage에 유저정보가 없다면, form의 submit을 기다렸다가 input으로부터 유저정보를 받고, 
                            //input에서 받은 user를 가진 paintGreetings를 호출할것이다. 
  // show the form 
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {  // local Storage에 유저정보가 있는 경우, 유저정보를 인자로 넣어준다 
  // show the greetings
  paintGreetings(savedUsername);
}
