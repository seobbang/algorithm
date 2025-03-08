const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0])

const arr = [];
const memo = Array.from({length: N}, ()=>Array.from({length: N}))

for(let i = 1; i <= N; i++){
   const tempArr = input[i].split(" ").map(Number)

   arr.push(tempArr)
}

function isVariable(num) {
    return num >= 0 && num < N
}

function countWay(x, y) {    
    memo[x][y] = BigInt(0);

    const rightJumpX = x
    const rightJumpY = y + arr[x][y]
    const downJumpX = x + arr[x][y]
    const downJumpY = y

    if(rightJumpX === N-1 && rightJumpY === N-1) {
        memo[x][y] = BigInt(1);
        return BigInt(1);
    }
    if(downJumpX === N-1 && downJumpY === N-1) {
        memo[x][y] = BigInt(1);
        return BigInt(1);
    }

    if(isVariable(rightJumpY) && isVariable(downJumpX)) {
        memo[x][y] = BigInt((memo[rightJumpX][rightJumpY] ?? countWay(rightJumpX, rightJumpY)) + (memo[downJumpX][downJumpY] ?? countWay(downJumpX, downJumpY)))
    }else if(isVariable(rightJumpY)) {
        memo[x][y] = BigInt(memo[rightJumpX][rightJumpY] ?? countWay(rightJumpX, rightJumpY))
    }else if(isVariable(downJumpX)) {        
        memo[x][y] = BigInt(memo[downJumpX][downJumpY] ?? countWay(downJumpX, downJumpY))
    }

    return memo[x][y]
}

console.log(countWay(0,0).toString())