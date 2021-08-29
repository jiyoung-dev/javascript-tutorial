const toDoForm = document.querySelector('.toDoForm');
const toDoInput = document.querySelector('input');
const toDoList = document.querySelector('.toDoList');

let toDos = []; // todo 저장할 리스트 
const TODOS_KEY = "toDos";  

// local storage에 저장하는 함수 
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todo 삭제함수 (delete todo)
function deleteToDo(event){
  const deleteTarget = event.target.parentElement;
  deleteTarget.remove();

  // id가 일치하는 데이터만 남기고 삭제
  toDos = toDos.filter(item => item.id !== parseInt(deleteTarget.id));
  saveToDos();
}

// todo 보여주는 함수 (read todo)
function paintToDo(newTodo){
  // list 뿌려줄 태그 동적생성 
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // li태그 삽입
  toDoList.appendChild(li);

  // li태그 하위 자식태그 삽입 
  li.appendChild(span);
  li.appendChild(button);

  // 불러온 newTodo 데이터 저장 
  li.id = newTodo.id;
  span.innerText = newTodo.text

  // 삭제버튼 핸들링 
  button.innerText = 'x';
  button.addEventListener('click', deleteToDo);
}


// input submit 제어 함수 (create todo)
function handleSubmit(event){
  // 이벤트를 취소함 (submit 기본 새로고침 현상 제어)
  event.preventDefault();  
  
  // input창에 입력한 값 저장, 초기화
  const newTodo = toDoInput.value;  
  toDoInput.value = "";  

  // 새로 생성되는 todo 객체 
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  };

  // toDos 배열에 newTodoObj 객체 전달
  toDos.push(newTodoObj);

  // paintToDo, saveToDos 함수 실행  
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleSubmit);

// 새로고침 해도 local 데이터 유지 
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // forEach: array의 각각의 item에 대해 함수 실행 (주로, 화살표와 익명함수를 함께 사용)
  parsedToDos.forEach(paintToDo);
}
