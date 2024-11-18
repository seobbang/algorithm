const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const map = Array.from({ length: M });

const queue = [];

for (let i = 1; i <= M; i++) {
  const arr = input[i].split(" ").map(Number);

  for (let j = 0; j < N; j++) {
    if (arr[j] === 1) queue.push([i - 1, j]);
  }

  map[i - 1] = arr;
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let day = 0;

function isNotRipeTomato(x, y) {
  if (x < 0 || x >= M || y < 0 || y >= N) return false;
  if (map[x][y] === 0) return true;
  return false;
}

function bfs() {
  while (queue.length) {
    const indexList = [...queue];
    queue.length = 0;

    let count = 0;

    indexList.forEach(([curX, curY]) => {
      for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];

        if (isNotRipeTomato(nextX, nextY)) {
          map[nextX][nextY] = 1;
          queue.push([nextX, nextY]);
          count++;
        }
      }
    });

    if (count === 0) break;

    day++;
  }
}

bfs();

for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) day = -1;
  }
}

console.log(day);
