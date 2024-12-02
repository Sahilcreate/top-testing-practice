export default function analyzeArray(arr) {
  return {
    average: findAverage(arr),
    min: findMin(arr),
    max: findMax(arr),
    length: arr.length,
  };
}

function findAverage(arr) {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return Math.round((sum / arr.length) * 100) / 100;
}

function findMax(arr) {
  const biggest = arr.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
  }, arr[0]);

  return biggest;
}

function findMin(arr) {
  const smallest = arr.reduce((accumulator, currentValue) => {
    return currentValue < accumulator ? currentValue : accumulator;
  }, arr[0]);
  return smallest;
}
