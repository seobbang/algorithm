const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const arr = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);
const targetNumArr = input[3].split(" ").map(Number);

function solution(target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] >= target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

targetNumArr.forEach((target) => {
  console.log(solution(target) === -1 ? 0 : 1);
});
