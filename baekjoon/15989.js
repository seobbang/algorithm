const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = Number(input[0]);

// O(N^2)

const total = Array.from({length: 10_001})
const memo = Array.from({length: 10_001})

total[1] = 1;
memo[1] = 0;

total[2] = 2;
memo[2] = 1;

total[3] = 3;
memo[3] = 1;

function calculate (N) {
    for(let i = 4; i <= N; i++) {
        if(total[i]) continue;

        memo[i] = i % 3 === 0 ? memo[i-2] + 1 : memo[i-2]

        total[i] = total[i-1] + memo[i]
    }

    return total[N]
    
}

for(let i = 1; i <= T; i++) {
    const N = Number(input[i]);

    console.log(calculate(N))
}