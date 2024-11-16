const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const triangle = [];

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  triangle[i - 1] = arr;
}

let answer = 0;

function bfs(i) {
  if (i === 0) {
    answer = triangle[0][0];
    return;
  }

  for (let j = 0; j < i; j++) {
    const max = Math.max(triangle[i][j], triangle[i][j + 1]);
    triangle[i - 1][j] += max;
  }

  bfs(i - 1);
}

bfs(n - 1);
console.log(answer);
