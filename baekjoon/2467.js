const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let min_sum = Number.MAX_SAFE_INTEGER;

let ans1 = arr[0];
let ans2 = arr[2];

function solution() {
  for (let i = 0; i <= N - 2; i++) {
    let num1 = arr[i];
    let num2;

    let left = i + 1;
    let right = N - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      num2 = arr[mid];
      const sum = num2 + num1;

      if (min_sum > Math.abs(sum)) {
        min_sum = Math.abs(sum);
        ans1 = num1;
        ans2 = num2;
      }

      if (min_sum === 0) break;

      if (sum < 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (min_sum === 0) break;
  }
}

solution();

console.log(ans1 + " " + ans2);
