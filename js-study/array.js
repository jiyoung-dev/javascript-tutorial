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

// 7. sort(compareFn?: (a: T, b: T) => number): this;
// 유니코드 기준으로 정렬시키고, 정렬된 배열을 반환한다.  
const num7 = [11, 2, 22, 1];
console.log(num7.sort()); // [ 1, 11, 2, 22 ]

// 8. every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
// 배열 안의 모든 요소가 주어진 판별함수를 통과하는지 테스트 
const num8 = [1, 2, 3, 4];
const isBelowThreshold = (value) => value < 5;
console.log(num8.every(isBelowThreshold)); // true (모든 원소가 5보다 작으므로 true)
const isAfterThreshold = (value) => value > 1;
console.log(num8.every(isAfterThreshold)); // false (1보다 작거나 같은 원소가 있으므로 false)

// 9. some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
// 배열안의 어떤 요소라도 주어진 판별함수를 통과하는지 테스트하는 메서드 
const num9 = [1, 2, 3, 4, 5];
// 짝수인지 판별하는 프로그램 
const even = (element) => element % 2 === 0;
console.log(num9.some(even));  // true (하나의 요소라도 true라면 true이다. 모두 통과해야하는 every랑 다름.)

// 10. forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// 주어진 콜백함수를 배열 요소에 대해 각각 실행함. 짧은 반복문 구조로, 주로 for문 대신 사용한다. 
const num10 =  [1, 2, 3, 4, 5];
num10.forEach(element => console.log(element * 2)); // 2 4 6 8 10

// 11. map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// 배열내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환 
const num11 = [1, 4, 9, 16];
const result11 = num11.map(x => x * 2);
console.log(result11);  // [ 2, 8, 18, 32 ]

// 12. filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환 
const fruit12 = ['apple', 'banana', 'kiwi', 'coconut'];
const result12 = fruit12.filter(word => word.length > 5);
console.log(result12);  // [ 'banana', 'coconut' ]

// 13. reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
// 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환함 
const num13 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 각 원소들에 대해 함수실행 
console.log(num13.reduce(reducer)); // 10 (1+2+3+4)
console.log(num13.reduce(reducer, 5));  // 15 (10+5)

// 14. reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
// 누적기에 대해 함수를 적용하고, 배열의 각 값(우측에서 좌측으로)은 단일 값으로 줄이고 배열로 반환
const num14 = [[0, 1], [2, 3], [4, 5]];
// 배열의 가장 오른쪽 원소부터 함수를 돌린다. 
const result14 = num14.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result14); // [ 4, 5, 2, 3, 0, 1 ]

// 15. find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
// 주어진 판별함수를 만족하는 첫번째 요소 값을 반환, 없는경우 undefined
const num15 = [5, 12, 8, 130, 44];
const found = num15.find(element => element > 10);
console.log(found);  // 12 (함수를 만족하는 첫번째 요소)