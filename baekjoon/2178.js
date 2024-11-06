// 솔루션 참고
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = [];
const visited = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 })
);

for (let i = 0; i <= N; i++) {
  if (i === 0) {
    map.push(Array.from({ length: M }));
    continue;
  }
  const arr = input[i].split("").map(Number);
  map.push([0, ...arr]);
}

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function isPossibleArea(x, y) {
  if (x < 0 || x > N || y < 0 || y > M) return false;
  if (!map[x][y]) return false;
  if (visited[x][y]) return false;

  return true;
}

const queue = [];
queue.push([1, 1]);
visited[1][1] = 1;

function bfs() {
  while (queue.length >= 1) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = curX + dx[i];
      const nextY = curY + dy[i];

      if (isPossibleArea(nextX, nextY)) {
        visited[nextX][nextY] = visited[curX][curY] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }

  return visited[N][M];
}

console.log(bfs());
