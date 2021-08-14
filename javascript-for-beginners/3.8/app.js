const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  const clickedClass = "active";

  // constains(), remove(), add() 사용해서 CSS 클래스 접근하기 
  /* if (h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);  // className없는 초기상태로 돌아감 
  } else {
  h1.classList.add(clickedClass);
  }
  console.log(h1.className); */

  // toggle() 사용
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);

/*
  classList.contains(className): classList에 해당 클래스가 포함되어있는지 확인. (default === True)
  classList.add(className): classList에 클래스를 새로 추가
  classList.remove(classNmae): classList에서 해당 클래스 제거
  DOMTokenList.toggle(): class name이 존재하는지 확인, 존재하는 경우 toggle은 class name을 제거, 존재하지 않는다면 class name을 추가. 위의 세가지 메서드를 합친 함수인것..!😮
*/