const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map((i) => Number(i));

const arr = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }).fill(0)
);

for (let i = 1; i <= M; i++) {
  const [k, j] = input[i].split(" ").map((n) => Number(n));
  arr[k][j] = 1;
  arr[j][k] = 1;
}

const dfs_answer = [];
const dfs_visited = new Array(N + 1);

dfs_answer.push(V);
dfs_visited[V] = true;

function DFS(V) {
  for (let currV = 1; currV <= N; currV++) {
    if (arr[V][currV] === 1 && !dfs_visited[currV]) {
      dfs_visited[currV] = true;
      dfs_answer.push(currV);
      DFS(currV);
    }
  }
}

const bfs_answer = [];
const bfs_visited = new Array(N + 1);

bfs_answer.push(V);
bfs_visited[V] = true;
const queue = [];
queue.push(V);

function BFS() {
  while (queue.length > 0) {
    const V = queue.shift();

    for (let currV = 1; currV <= N; currV++) {
      if (arr[V][currV] === 1 && !bfs_visited[currV]) {
        bfs_visited[currV] = true;
        bfs_answer.push(currV);
        queue.push(currV);
      }
    }
  }
}

DFS(V);
BFS();
console.log(dfs_answer.join(" "));
console.log(bfs_answer.join(" "));
