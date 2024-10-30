// 솔루션 참고
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const numArr = input[1].split(" ").map(Number);
const op = input[2].split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const caclulator = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b),
];

let total = 0;

function dfs(count, result) {
  total++;
  if (count === N - 1) {
    max = Math.max(result, max);
    min = Math.min(result, min);
  } else {
    for (let i = 0; i < op.length; i++) {
      if (op[i] === 0) continue;

      op[i]--;
      dfs(count + 1, caclulator[i](result, numArr[count + 1]));
      op[i]++;
    }
  }
}

dfs(0, numArr[0]);

console.log(max);
console.log(min);
console.log(total);
