const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  const clickedClass = "active";
  if (h1.className === clickedClass){
    h1.className = "";  // className없는 초기상태로 돌아감 
  } else {
  h1.className = clickedClass;
  }
  console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);