const numbers = [1, 2, 3];
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added)