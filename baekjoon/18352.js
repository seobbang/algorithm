const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number);
const distance = Array.from({ length: N + 1 });
const road = Array.from({ length: N + 1 }, () => new Array());

for (let i = 1; i <= M; i++) {
  const [start, dest] = input[i].split(" ").map(Number);
  road[start].push(dest);
}

// init
const queue = [];
queue.push(X);
distance[X] = 0;

function bfs() {
  while (queue.length) {
    const curV = queue.shift();

    road[curV].forEach((destV) => {
      if (distance[destV] !== undefined) return;

      distance[destV] = distance[curV] + 1;

      queue.push(destV);
    });
  }
}

bfs();

let answer = [];
distance.forEach((value, idx) => {
  if (value === K) {
    answer.push(idx);
  }
});

if (answer.length === 0) console.log(-1);
else answer.sort((a, b) => a - b).forEach((item) => console.log(item));
