const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => new Array());
const visited = Array.from({ length: N + 1 });

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);

  graph[u].push(v);
  graph[v].push(u);
}

let groupCount = 0;

function dfs(i) {
  graph[i].forEach((v) => {
    if (!visited[v]) {
      visited[v] = true;
      dfs(v);
    }
  });
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    visited[i] = true;
    groupCount++;
    dfs(i);
  }
}

console.log(groupCount);
