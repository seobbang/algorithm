const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 커서 문제 (앞뒤만 건드리니까) -> stack 사용하기
const left = input[0].split("");
const right = [];

const M = Number(input[1]);

for(let i = 2; i < 2+M; i++) {
    const inst = input[i];

    if(inst.startsWith("L") && left.length) {
        right.push(left.pop())
    } else if(inst.startsWith("D") && right.length) {
        left.push(right.pop())
    } else if(inst.startsWith("B") && left.length) {
        left.pop();
    } else if(inst.startsWith("P")) {
        const char = inst[inst.length -1]
        left.push(char)
    }
}   

console.log(left.join("")+right.reverse().join(""))

// 5397, 2346, 3190, 표 편집, 10866