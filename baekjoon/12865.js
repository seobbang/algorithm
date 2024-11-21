const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const list = [];
list.push(null);

for (let i = 1; i <= N; i++) {
  const [w, v] = input[i].split(" ").map(Number);
  list.push({ w, v });
}

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }).fill(0)
);

function solution() {
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < K + 1; j++) {
      if (list[i].w <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          (dp[i - 1][j - list[i].w] ?? 0) + list[i].v
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
}

solution();

console.log(dp[N][K]);
