const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(input) {
  const [M, N, K] = input[0].split(" ").map(Number);
  const tempArr = Array.from({ length: M }, () => Array.from({ length: N }));

  for (let i = 1; i <= K; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    tempArr[x][y] = 1;
  }

  const visited = Array.from({ length: M }, () => Array.from({ length: N }));
  let count = 0;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  function isPossibleArea(x, y) {
    if (x < 0 || x >= M || y < 0 || y >= N) return false;
    if (visited[x][y]) return false;
    if (tempArr[x][y] !== 1) return false;
    return true;
  }

  function bfs(x, y) {
    let queue = [];
    queue.push([x, y]);

    while (queue.length) {
      const [curX, curY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];

        if (isPossibleArea(nextX, nextY)) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY]);
        }
      }
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && tempArr[i][j] === 1) {
        bfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}

const T = Number(input[0]);

let groupStartLine = 1;
for (let i = 1; i <= T; i++) {
  const [, , K] = input[groupStartLine].split(" ").map(Number);

  const targetInput = input.slice(groupStartLine, groupStartLine + K + 1);

  groupStartLine += K + 1;

  solution(targetInput);
}
