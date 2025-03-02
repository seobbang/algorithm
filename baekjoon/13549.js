const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const MAX = 100_000

const visited = Array.from({length: MAX + 1}).fill(-1);

const queue = [];
queue.push(N)
visited[N] = 0

function isVariableValue (value) {
    return value >= 0 && value <= MAX
}

function bfs() {
    while (queue.length > 0) {
        const value = queue.shift()
        const time = visited[value];
    
        if(value === K) return time;
    
        for(next of [value * 2, value +1, value -1]) {
            if(isVariableValue(next)) {
                if(next === value * 2) {
                    if(visited[next] !== -1 && visited[next] > time || visited[next] === -1) {
                        queue.push(next);
                        visited[next] = time
                    }
                } else {
                    if(visited[next] !== -1 && visited[next] > time + 1 || visited[next] === -1) {
                        queue.push(next)
                        visited[next] = time + 1
                    }
                }
            }
        }
    }
}

console.log(bfs())