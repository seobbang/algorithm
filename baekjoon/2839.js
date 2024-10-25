const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const BagType = [5, 3];

// 내림차순 가정
const memo = Array(N);

function solution(N) {
  if (memo[N]) return memo[N];

  let answer;

  if (N < BagType[BagType.length - 1]) return -1;

  if (BagType.includes(N)) return 1;

  const res1 = solution(N - 5) === -1 ? -1 : solution(N - 5) + solution(5);
  const res2 = solution(N - 3) === -1 ? -1 : solution(N - 3) + solution(3);

  if (res1 !== -1 && res2 !== -1) answer = Math.min(res1, res2);
  else if (res1 !== -1) answer = res1;
  else if (res2 !== -1) answer = res2;

  memo[N] = answer;
  return answer > -1 ? answer : -1;
}

console.log(solution(N));
