// initialization 
let clientsEstimations = [];

// collect estimations from user
const estimationsCount = 5;
for (let i = 0; i < estimationsCount; i++)
  askClientToGiveEstimation();

// analyze estimation results
const goodEstimationBoundary = 5;
const goodEstimations = clientsEstimations.filter(est => est > goodEstimationBoundary);
const goodEstimationsCount = goodEstimations.length;
const notGoodEstimationsCount = clientsEstimations.length - goodEstimationsCount;

console.log(clientsEstimations);
alert(`Всего положительных оценок: ${goodEstimationsCount}\
 \nВсего отрицательных оценок: ${notGoodEstimationsCount}`);


/**
 * Ask estimation about coffee house from user, check the result and 
 * add it to a summary array if correct.
 * @returns Filling clients estimations array with correct estimations
 */
function askClientToGiveEstimation() {
  let estimation = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
  let isEstimationCorrect = true;

  // check for incorrect input
  estimation ?? (isEstimationCorrect &&= false);

  // convert to Number
  estimation = Number(estimation);

  // check for correct number value
  isEstimationCorrect &&= !Number.isNaN(estimation);

  // check for correct number range (1 .. 10)
  isEstimationCorrect &&= (1 <= estimation && estimation <= 10);

  if (!isEstimationCorrect)
    return;

  clientsEstimations.push(estimation);
}