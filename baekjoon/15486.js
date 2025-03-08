const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0])

const arr = [];

for(let i = 1; i <= N; i++){
   arr.push(input[i].split(" ").map(Number))
}

const memo = Array.from({length: N}).fill(0)

for(let i = N-1; i>=0; i--) {
    const [T, P] = arr[i];

    if(i + T - 1 >= N) {
        memo[i] = memo[i+1] ?? 0;
    }else {
        memo[i] = Math.max(memo[i+1] ?? 0, P + (memo[i+T]??0))
    }
}

console.log(memo[0])