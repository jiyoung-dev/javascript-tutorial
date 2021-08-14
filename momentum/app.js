const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  // console.dir(loginInput);
  // console.log("hello", loginInput.value);

  /* input 이름 유효성검사 
    - username이 없으면 안됨
    - username에 길이 제한을 둠
  */
  const username = loginInput.value;
  // if(username === ""){
  //   alert("Please write your name");
  // } else if(username.length >= 15) {
  //   alert("Your name is too long.)
  // }
  // else{
  //   console.log("hello", loginInput.value);

  // html form 태그로 유효성검사 
  console.log(username);
  }


loginButton.addEventListener("click", onLoginBtnClick);