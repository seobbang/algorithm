const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = []

for(let i = 1; i <= M; i++){
    arr.push(input[i].split(''))
}

const visited = Array.from({length : M}, ()=>Array.from({length: N}).fill(false))

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

function dfs(x, y, count) {
    for(let i = 0; i < 4; i++) {
        const nextX = x + dx[i]
        const nextY = y + dy[i]

        if(nextX >=0 && nextX < M && nextY >=0 && nextY < N) {
            if(!visited[nextX][nextY] && arr[nextX][nextY] === arr[x][y]) {
                visited[nextX][nextY] = true;
                count.value++;

                dfs(nextX, nextY, count)
            }
        }
    }
}


let whiteAnswer = 0;
let blueAnswer = 0;

for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
        if(!visited[i][j]) {
            const count = {value : 1}
            visited[i][j] = true;
            dfs(i, j, count)

            if(arr[i][j] === "B") {
                blueAnswer += count.value**2
            } else {
                whiteAnswer += count.value**2
            }
        }
    }
}

console.log(whiteAnswer, blueAnswer)