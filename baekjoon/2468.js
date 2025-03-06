const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = [];
for(let i = 1; i <= N; i++) {
    arr.push(input[i].split(" ").map(Number));
}

let answer = 0;


const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]


let rainHeight = 0;

while(true) {
    let areaCount = 0;
    const visited =  Array.from({length: N}, ()=>Array.from({length: N}).fill(false))

    function dfs(curX, curY) {
        for(let i = 0; i < 4; i++) {
            const nextX = curX + dx[i];
            const nextY = curY + dy[i];
    
            if(nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
                if(arr[nextX][nextY] > rainHeight && !visited[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    dfs(nextX, nextY)
                }
            }
        }
    }

    for(let i = 0; i< N; i++) {
        for(let j = 0; j< N; j++) {
            if(arr[i][j] > rainHeight && !visited[i][j]) {
                visited[i][j] = true;
                areaCount++;
                dfs(i, j)
            }
        }
    }

    if(areaCount === 0) break;

    answer = Math.max(answer, areaCount)

    rainHeight++;
}

console.log(answer)

