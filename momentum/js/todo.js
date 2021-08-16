const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];
// local storage에 저장 
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // 문자열 변환함수
  
}

// todo 삭제함수 
function deleteToDo(event){
  const deleteTarget = event.target.parentElement;
  deleteTarget.remove();
  // console.log(deleteTarget.id);  // 해당 id를 갖는 데이터 전체를 Storage에서 삭제 해보자
  // 현재 로컬에 저장되고 있는 toDos 배열을 삭제 될때마다 업데이트 시켜야한다
  toDos = toDos.filter(item => item.id !== parseInt(deleteTarget.id));
  saveToDos();
}

// todo 생성함수 
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo.text;
  li.id = newTodo.id;
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
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  };
  toDos.push(newTodoObj); // toDos 배열에 newTodo 전달 
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// TODO: toDos 배열에 들어오는 기존값 -> 새로고침 후에도 계속 유지, 새로운 data 추가시, update 기능 

if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // forEach: array의 각각의 item에 대해 함수 실행 (주로, 화살표와 익명함수를 함께 사용)
  parsedToDos.forEach(paintToDo);

}

// TODO: delete 하면 local에서도 삭제되도록 구현 
// 1. newTodo를 문자열이 아닌, 객체로 push 해보자 (item 구분하기 위한 id 지정)
// 2. paintToDo 함수에서 span태그에 object중에서, newTodo.text만 넣기 
