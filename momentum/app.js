const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector(".hidden");
const HIDDEN_CLASSNAME = "hidden";

// form submit은 기본적으로 브라우저 새로고침 후에 동작한다.  
function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본동작을 막아주는 함수 
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit은 Enter를 누르거나, 버튼을 클릭할때 발생하는 이벤트
loginForm.addEventListener("submit", onLoginSubmit);
