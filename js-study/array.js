'use strict';

// 1. 배열 선언방법 
const arr1 = new Array();
const arr2 = [1, 2];  // 이 방법을 더 자주 사용함 

// 2. 배열 순회 
// a. for문 사용법  
for(let i=0; i<arr2.length; i++){
  console.log(arr2[i]);  // 1 2 
}

// b. for of 사용법 
for(let value of arr2){
  console.log(value);  // 1 2 
}

// c. forEach 사용법 
arr2.forEach(value => {
  console.log(value);
});  // 1 2 

arr2.forEach((value, index) => console.log(value, index));
/**
 * 1 0
 * 2 1
 */

// 3. 추가, 삭제, 복사 
const numArray = [1, 2, 3, 4, 5];

numArray.push(6);
console.log(numArray);  // [1, 2, 3, 4, 5, 6]

numArray.pop()
console.log(numArray);  // [1, 2, 3, 4, 5]

numArray.unshift(-1, 0);
console.log(numArray);  // [-1, 0, 1, 2, 3, 4, 5]

numArray.shift();
console.log(numArray);  // [0, 1, 2, 3, 4, 5]

numArray.splice(1, 2);  // index 1부터 2까지 삭제후 반환 
console.log(numArray);  // [0, 3, 4, 5] 

const fruits = ['apple', 'banana', 'mango'];
fruits.splice(1, 1, 'cherry', 'melon', 'tomato');
console.log(fruits);  // ["apple", "cherry", "melon", "tomato", "mango"]

const fruit1 = ['apple', 'banana', 'mango'];
const fruit2 = ['orange'];
const newFruits = fruit1.concat(fruit2);
console.log(newFruits);  // ["apple", "banana", "mango", "orange"]

// 4. Searching
const fruit = ['apple', 'banana', 'mango'];
// mango의 인덱스 반환하기 
console.log(fruit.indexOf('mango'));  // 2
// 특정 원소가 들어있는지 확인 (boolean)
console.log(fruit.includes('mango')); // true
console.log(fruit.includes('cherry')); // false

const arrayNum = [1, 2, 3, 2, 1];
console.log(arrayNum.indexOf(1));  // 0
console.log(arrayNum.lastIndexOf(1));  // 4

// 추가학습 -- Array API 뜯어보기 

// 1. length: number; 
// 숫자를 반환하며, 최대 인덱스 크기 + 1이다. 
const arr = [1, 2, 3];
console.log(arr.length);  // 3 

// 2. toString(): string;
// 모든 원소를 문자열로 변환
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());  // "1, 2, a, 1a"

// 3. pop()
// 마지막 원소 삭제하고, 반환 
console.log(arr.pop());  // 3
console.log(arr);  // [1, 2]

// 4. join(separator?: string): string;
// separator라는 특정 문자열을 합해서 문자열로 반환 
const name = ['jiyoung', 'nayoung'];
console.log(name.join(" and ")); // /jiyoung and nayoung

// 5. reverse(): T[];
// 배열안에서 원소들을 역순으로 배열 
const num = [1, 2, 3, 4, 5];
console.log(num.reverse());  // [ 5, 4, 3, 2, 1 ]

// 6. slice(start?: number, end?: number): T[];
// 시작과 끝 인덱스를 지정해 배열을 슬라이싱하는 메서드. 
// start부터 end전까지 반환한다 (end는 제외한다고 나와있음)
console.log(num.slice(2, 4)); // [ 3, 2 ]

