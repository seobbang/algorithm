const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = input[0];

let num = 1;

const stack = []
const answer = []

for(let i = 1; i<=n;) {
    if(stack[stack.length - 1] === Number(input[i])) {
        stack.pop();
        answer.push('-');
        i++;
    } else {
        if(num > n) {
            console.log("NO")
            return;
        }
        stack.push(num++)
        answer.push('+');
    }
}

answer.forEach((item)=>{
    console.log(item)
})

// O(N)