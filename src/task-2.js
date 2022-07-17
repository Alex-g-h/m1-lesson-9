function getSumOfSequence(number) {
  let arr = [];
  for (let i = 1; i <= number; i++)
    arr.push(i);

  return arr[0] + arr[arr.length - 1];
}

const nmb = 5;
const res = getSumOfSequence(nmb);
console.log(`Sum of first and last element of sequence from 1 to ${nmb} is equal to ${res}.`);