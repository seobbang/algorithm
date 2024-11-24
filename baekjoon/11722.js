const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number)

const dp = new Array({length: N}).fill(1)

for(let i = 0; i< N; i++) {
    let max = 1;

    const prev  = dp.slice(0,i)

    prev.forEach((dpValue, idx)=>{
        if(A[idx] > A[i]) max = Math.max(max, dpValue + 1)
    })

    dp[i] = max
}

console.log(dp.sort((a,b)=>b-a)[0]);
