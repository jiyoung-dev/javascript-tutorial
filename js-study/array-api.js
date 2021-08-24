// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());  // apple,banana,orange
  console.log(fruits.join()); // apple,banana,orange
  console.log(fruits.join(' '));  // apple banana orange
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(fruits.split(',')); // [ '🍎', ' 🥝', ' 🍌', ' 🍒' ]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));  // index 2 부터 마지막까지 반환 
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 📌
{ 
  // score가 90점인지 확인하는 함수가 students의 모든 원소에서 실행되며, boolean 반환. 
  // array.find(): 콜백함수 조건을 만족하는(true이면 종료) array의 첫번째 원소를 반환. 
  const answer5 = students.find(element => element.score === 90); 
  console.log(answer5);  // Student { name: 'C', age: 30, enrolled: true, score: 90 }
}

// Q6. make an array of enrolled students
{
  const answer6 = students.filter(element => element.enrolled);
  console.log(answer6);
  /*
  [
    Student { name: 'A', age: 29, enrolled: true, score: 45 },
    Student { name: 'C', age: 30, enrolled: true, score: 90 },
    Student { name: 'E', age: 18, enrolled: true, score: 88 }
  ]
  */
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const answer7 = students.map(element => element.score);
  console.log(answer7);
}

// Q8. check if there is a student with the score lower than 50
{
  const answer8 = (elememt) => elememt.score < 50;
  console.log(students.some(answer8));  // true
}

// Q9. compute students' average score
{
  const score_list = students.map(element => element.score);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = score_list.reduce(reducer);
  console.log(sum / score_list.length);  // 73.8
}
// 9번 다른풀이 
{
  const result9 = students.reduce((prev, curr) => prev + curr.score, 0);  // 초기값을 0으로 설정
  console.log(result9 / students.length);  // 73.8 
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const score_list = students.map(element => element.score);
  const answer10 = score_list.join();
  console.log(answer10);  
}
// 10번 다른풀이 (가독성 up)
{
  const answer10 = students
    .map((student) => student.score)
    .join();
  console.log(answer10);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // 오름차순 정렬 
  // Array.prototype.sort 는 유니코드 즉, 문자열 기준으로 오름차순 정렬 기능을 제공한다.
  // 숫자요소를 정렬하려면 sort 메서드에 정렬순서를 정의하는 비교함수를 인수로 전달해야함.
  // 비교함수의 반환값이 0보다 작다면 첫번째 인수를 정렬하고, 0이면 정렬하지 않으며 0보다 크면 두번째 인수를 정렬한다.
  const score_list = students.map(element => element.score);  // [45, 80, 90, 66, 88]
  const answer11 = score_list.sort((a,b) => a-b); // 앞에서부터 원소 두개씩 비교하는것이다. 45-80 < 0 이므로 첫번째 원소인 45부터 정렬하고, 이를 반복하면 오름차순 정렬이 된다.
  // 내림차순은 반대로, b-a 연산을 수행하는 함수를 만들어주면 된다. 
  console.log(answer11.join());
}
// 가독성 up!
{
  const answer11 = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(answer11);
}
