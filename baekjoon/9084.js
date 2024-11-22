const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = Number(input[0])

function solution ( coinList, price) {
    const dp = Array.from({length: price+1}).fill(0)
    dp[0] = 1

    coinList.forEach((coin)=>{
        for(let i = coin; i < price+1; i++) {
            dp[i] = dp[i] + dp[i-coin]
        }
    })

    return dp[price]
}


for(let i =0; i<T; i++) {
    const coinList = input[i*3 +2].split(" ").map(Number)
    const price = Number(input[i*3 + 3])

    console.log(solution(coinList,price))
}



