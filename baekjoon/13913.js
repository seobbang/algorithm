const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)

if(N === K) {
    console.log(0)
    console.log(N)
} else {
    const MAX_VALUE = 100_000
    
    const visited = new Map();
    
    const queue = [];
    queue.push(N);
    visited.set(N, [0, String(N)]);
    
    while(queue.length) {
        const curValue = queue.shift();
        if(curValue === K) break;
    
        for(nextValue of [curValue * 2, curValue - 1, curValue + 1]) {
            if(nextValue >= 0 && nextValue <= MAX_VALUE && !visited.has(nextValue)) {
                visited.set(nextValue, [visited.get(curValue)[0] + 1, visited.get(curValue)[1]+" "+String(nextValue)])
                queue.push(nextValue)
            }
        }
    }
    
    console.log(visited.get(K)[0])
    console.log(visited.get(K)[1])
}
