
export function getSum(arr) {
    let sum = 0;
    for (const n of arr) {
      sum += n;
    }
    return sum;
}
export function getNumberOfEven(arr) {
    let number = 0;
    for (const n of arr) {
      if (n % 2 === 0) {
        number++;
      }
    }
    return number;
  }
export function getMaxEven(...arr) {
  return Math.max(...arr.filter(n=> n%2===0));
}
export function binarySearch(arr, element) {
  let result = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end && result === -1) {
    const half = Math.round((end + start) / 2);
    if (element === arr[half]) {
      result = half;
    } else if (element > arr[half]) {
      start = half + 1;
    } else {
      end = half - 1;
    }
  }
  return result;
}
export function compareNumber(a, b) {
  return  a - b;
}
