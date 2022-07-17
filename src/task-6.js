const numbers = [10, 4, 100, -5, 54, 2];

let res = 0;

// for
for (let i = 0; i < numbers.length; i++)
  res += numbers[i] ** 3;
console.log('\'for\' result:', res);
res = 0;


// for .. of
for (num of numbers)
  res += num ** 3;
console.log('\'for .. of\' result:', res);
res = 0;


// forEach
numbers.forEach(val => res += val ** 3);
console.log('\'forEach\' result:', res);
res = 0;


// reduce
res = numbers.reduce((result, value) => result += value ** 3, 0);
console.log('\'reduce\' result:', res);
