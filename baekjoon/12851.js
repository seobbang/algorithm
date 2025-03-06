const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const visited = Array.from({length : 100_001}).fill(-1)

const queue = []
queue.push(N)

visited[N] = 0;

let answer = 0;
let index = 0;

function bfs() {
    while(index < queue.length) {
        const curValue = queue[index++];

        for(let i = 0; i< 3; i++) {
            let nextValue;
            if(i === 0) nextValue = curValue * 2
            if(i === 1) nextValue = curValue - 1
            if(i === 2) nextValue = curValue + 1

            if(nextValue >= 0 && nextValue <= 100000) {
                if(visited[nextValue] === -1 || visited[nextValue] === visited[curValue] + 1) {
                    visited[nextValue] = visited[curValue] + 1;
    
                    if(nextValue === K) answer++;
                    else queue.push(nextValue)
                } 
            }            
        }
    }
}

if(N === K) {
    console.log(0)
    console.log(1)
} else {
    bfs()
    
    console.log(visited[K])
    console.log(answer)
}
