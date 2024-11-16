const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const S = Array.from({ length: N });
let total = 0;

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map(Number);
  total += arr.reduce((acc, cur) => acc + cur, 0);
  S[i - 1] = arr;
}

let answer = Number.MAX_SAFE_INTEGER;

function sum(arr, i) {
  let sum = 0;
  arr.forEach((j) => {
    sum += S[i][j] + S[j][i];
  });
  return sum;
}

let count = 0;

function link(arr) {
  let score = 0;
  for (let i = 0; i < N; i++) {
    if (arr.includes(i)) continue;

    for (let j = 0; j < N; j++) {
      if (arr.includes(j) || i === j) continue;
      score += S[i][j];
    }
  }

  return score;
}

function dps(arr, prev) {
  if (arr.length === N / 2) {
    answer = Math.min(answer, Math.abs(link(arr) - prev));
    return;
  }

  for (let i = arr[arr.length - 1] + 1; i < N; i++) {
    count++;
    dps([...arr, i], prev + sum(arr, i));
    count--;
  }
}

dps([0], 0);

console.log(answer);
