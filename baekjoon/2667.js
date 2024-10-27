const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const graph = Array.from({ length: N }, (_, idx) =>
  input[idx + 1].split("").map((i) => Number(i))
);

const visited = Array.from({ length: N }, () =>
  Array.from({ length: N }).fill(false)
);

// 상 하 좌 우
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function isVariableArea(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= N) return false;
  if (visited[x][y] || graph[x][y] === 0) return false;
  return true;
}

const answer = [];

function DFS(x, y) {
  visited[x][y] = true;
  let count = 1;

  // 상하좌우 탐색
  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];

    // 가능한 곳이라면 (존재하고, 방문하지 않은)
    if (isVariableArea(nextX, nextY)) {
      count += DFS(nextX, nextY); // 그 곳에서 또 탐색
    }
  }

  return count;
}

// 더이상 방문하지 않은 곳이 없을 때까지
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 집이 존재하는데 아직 방문하지 않음
    if (graph[i][j] === 1 && !visited[i][j]) {
      const totalCount = DFS(i, j);

      answer.push(totalCount);
    }
  }
}

console.log(answer.length);
if (answer.length > 0) console.log(answer.sort((a, b) => a - b).join("\n"));
