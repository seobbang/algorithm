const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let answer = 0;
const queue = [];
const visited = new Set();

function insertQueue(number) {
  if (number >= 0 && number <= 100000 && number !== N && !visited.has(number)) {
    queue.push(number);
    visited.add(number);
  }
}

function bfs() {
  queue.push(N);
  visited.add(N);

  let count = 0;

  while (true) {
    count++;
    const nowLength = queue.length;

    for (let i = 0; i < nowLength; i++) {
      const cur = queue.shift();

      const sub = cur - 1;
      const add = cur + 1;
      const mul = cur * 2;

      if (sub === K || add === K || mul === K) {
        answer = count;
        break;
      }

      insertQueue(sub);
      insertQueue(add);
      insertQueue(mul);
    }

    if (answer > 0) break;
  }
}

if (N !== K) bfs();

console.log(answer);
