const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);

const arr = Array.from({length: N}, ()=>Array.from({length: M}).fill(false))

for(let i = 1; i <= K; i++){
    const [x, y] = input[i].split(" ").map(Number);
    arr[x-1][y-1] = true;
}

const visited = Array.from({length : N}, ()=>Array.from({length: M}).fill(false))

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

function dfs(x, y) {
    let count = 1;

    for(let i = 0; i < 4; i++) {
        const nextX = x + dx[i]
        const nextY = y + dy[i]

        if(nextX >=0 && nextX < N && nextY >=0 && nextY < M) {
            if(!visited[nextX][nextY] && arr[nextX][nextY]) {
                visited[nextX][nextY] = true;

                count += dfs(nextX, nextY)
            }
        }
    }

    return count;
}


let answer = 0;

for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(!visited[i][j] && arr[i][j]) {
            visited[i][j] = true;

            answer = Math.max(dfs(i,j), answer)
        }
    }
}

console.log(answer)