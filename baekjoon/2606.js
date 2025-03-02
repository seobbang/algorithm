const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

const graph = Array.from({length: N+1}, () => new Array());
const visited = Array.from({length: N+1});

for(let i = 2; i < 2 + M; i++){
    const [v, w] = input[i].split(" ").map(Number);
    graph[v].push(w);
    graph[w].push(v);
}

const queue = [];
queue.push(1);
visited[1] = true;

let answer = 0;

while(queue.length > 0) {
    const currV = queue.shift()

    graph[currV].forEach((nextV)=>{
        if(!visited[nextV]){
            queue.push(nextV)    
            visited[nextV] = true;

            answer++;
        }
    })
}

console.log(answer)