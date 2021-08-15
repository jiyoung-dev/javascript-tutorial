const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

// todo 삭제함수 
function deleteToDo(event){
  const deleteTarget = event.target.parentElement;
  deleteTarget.remove();
}

// todo 생성함수 
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  // todo 삭제버튼 추가 
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  toDoList.appendChild(li);
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

