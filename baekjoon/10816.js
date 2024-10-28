const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const targetNumArr = input[3].split(" ").map(Number);

function LowerBound(target) {
  let left = 0;
  let right = arr.length - 1;
  let min_idx = arr.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid - 1;
      min_idx = Math.min(min_idx, mid);
    } else {
      left = mid + 1;
    }
  }
  return min_idx === arr.length ? -1 : min_idx;
}

function UpperBound(target) {
  let left = 0;
  let right = arr.length - 1;
  let min_idx = arr.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
      min_idx = Math.min(min_idx, mid);
    } else {
      left = mid + 1;
    }
  }
  return min_idx === arr.length && arr[arr.length - 1] !== target
    ? -1
    : min_idx;
}

console.log(
  targetNumArr
    .map((target) => {
      if (UpperBound(target) === -1 || LowerBound(target) === -1) return 0;
      return UpperBound(target) - LowerBound(target);
    })
    .join(" ")
);
