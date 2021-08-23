// Cloning Object
const item1 = {color: 'red'};
const item2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, item1, item2);
console.log(mixed.color);  // blue
console.log(mixed.size);  // big