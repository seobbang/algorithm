const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)
const arr = [];

for(let i = 1; i <= N; i++) {
    arr.push(input[i].split(" ").map(Number))
}

let answer = 0;

const dx = [1, -1, 1, -1, 1, -1, 0, 0]
const dy = [0, 0, 1, -1, -1, 1, 1, -1]

function bfs (i, j) {
    const queue = [];
    queue.push([i, j]);
    const visited = Array.from({length: N}, () => Array.from({length: M}).fill(-1))
    visited[i][j] = 0;

    while (queue.length) {
        const [curX, curY] = queue.shift();
        if(arr[curX][curY] === 1) {
            answer = Math.max(answer, visited[curX][curY])
            break;
        }

        for(let i = 0; i < 8; i++) {
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];

            if(nextX >= 0 && nextX < N && nextY >=0 && nextY < M && visited[nextX][nextY] === -1) {
                visited[nextX][nextY] = visited[curX][curY] + 1;
                queue.push([nextX,nextY])
            }
        }
    }
}

for(let i = 0; i<N; i++) {
    for(let j = 0; j<M; j++) {
        if(arr[i][j] === 0) {
            bfs(i, j)
        }
    }
}

console.log(answer)