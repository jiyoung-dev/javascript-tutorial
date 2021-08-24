// JSON, JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
const obj = {
  name: 'Kim',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

// obj 객체를 JSON 포맷으로 변환 
const json = JSON.stringify(obj);
console.log(json, typeof json);  // {"name":"Kim","age":20,"alive":true,"hobby":["traveling","tennis"]} string

// 원하는 value만 받아오기 
console.log(JSON.stringify(obj, ['age']));  // {"age":20}

// 들여쓰기 적용 
const json2 = JSON.stringify(obj, null, 2);
console.log(json2);
/*
{
  "name": "Kim",
  "age": 20,
  "alive": true,
  "hobby": [
    "traveling",
    "tennis"
  ]
}
*/

// 콜백함수 적용 
const jsonFn = JSON.stringify(obj, (key, value) => {
  return key === 'name' ? 'jiyoung' : value;
}, 2)
console.log(jsonFn);
/*
{
  "name": "jiyoung",
  "age": 20,
  "alive": true,
  "hobby": [
    "traveling",
    "tennis"
  ]
}
*/

// 배열 객체를 JSON으로 변환 
const todos = [
  { id: 1, content: 'HTML', completed: false},
  { id: 2, content: 'CSS', completed: false},
  { id: 3, content: 'JavaScript', completed: true}
];

const arrayToJson = JSON.stringify(todos, null, 2);
console.log(arrayToJson);
/*
[
  {
    "id": 1,
    "content": "HTML",
    "completed": false
  },
  {
    "id": 2,
    "content": "CSS",
    "completed": false
  },
  {
    "id": 3,
    "content": "JavaScript",
    "completed": true
  }
]
*/

// 2. JSON to Object
// parse(json) 
const parsed = JSON.parse(json2);
const JsonToArray = JSON.parse(arrayToJson);

console.log(parsed, typeof parsed); // { name: 'Kim', age: 20, alive: true, hobby: [ 'traveling', 'tennis' ] } object
console.log(JsonToArray, typeof JsonToArray);
/*
[
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JavaScript', completed: true }
] object
*/