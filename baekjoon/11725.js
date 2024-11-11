const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const nodeArr = Array.from({ length: N + 1 }, () => new Array());
const visited = Array.from({ length: N + 1 });
const parentArr = Array.from({ length: N + 1 }, () => new Array());

for (let i = 1; i <= N - 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  nodeArr[A].push(B);
  nodeArr[B].push(A);
}

function dfs(parent) {
  const children = nodeArr[parent];
  visited[parent] = true;

  if (children.length === 0) return;

  children.forEach((child) => {
    if (!visited[child]) {
      parentArr[child] = parent;
      dfs(child);
    }
  });
}

dfs(1);

for (let i = 2; i <= N; i++) {
  console.log(parentArr[i]);
}
