const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const memo = Array(N);

function solution(N) {
  // memoization
  if (memo[N]) return memo[N];

  if (N === 0) return 1;
  if (N === 1 || N === 2 || N === 3) return N;

  let res = solution(N - 1) + solution(N - 2);
  memo[N] = res % 10007;
  return res % 10007;
}

console.log(solution(N));
