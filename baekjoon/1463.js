const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const memo = Array(N);

function solution(N) {
  // memoization
  if (memo[N]) return memo[N];

  if (N === 1) return 0;

  let res;

  if (N % 3 === 0 && N % 2 === 0) {
    res = Math.min(solution(N / 3), solution(N / 2), solution(N - 1)) + 1;
  } else if (N % 3 === 0) {
    res = Math.min(solution(N / 3), solution(N - 1)) + 1;
  } else if (N % 2 === 0) {
    res = Math.min(solution(N / 2), solution(N - 1)) + 1;
  } else {
    res = solution(N - 1) + 1;
  }

  memo[N] = res;
  return res;
}

console.log(solution(N));
