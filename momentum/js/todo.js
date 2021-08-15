const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

// todo 만들어주는 함수 
function paintToDo(newTodo){
  // console.log("here will be todo", newTodo);
  // html에 newTodo를 담아서 li>span 태그를 뿌려주자 
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  // console.log(li);
  toDoList.appendChild(li);
  console.log(toDoList);
  // 1. 리스트 삭제 구현 
  // 2. 새로고침해도 todo 남아있게 해야함 
}

// submit의 기본동작 (새로고침) 방지 
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; 
  // console.log(newTodo);
  // Enter 누르면 placeholder 비우기 
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

