const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number)

const MAX_VALUE = 10**9

const visited = new Map();

const queue = [];
queue.push(A);
visited.set(A, 0)

while(queue.length) {
    const curValue = queue.shift();
    if(curValue === B) break;

    for(nextValue of [curValue * 2, Number(String(curValue)+"1")]) {
        if(nextValue >= 1 && nextValue <= MAX_VALUE && !visited.has(nextValue)) {
            visited.set(nextValue, visited.get(curValue) + 1);
            queue.push(nextValue)
        }
    }
}

console.log(visited.has(B) ? visited.get(B) + 1: -1)