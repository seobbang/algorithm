const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const inputArr = input[1].split(" ").map(Number)

const sortedArr = Array.from(new Set([...inputArr].sort((a, b)=>a-b)))

const map = new Map();

sortedArr.forEach((value, curIndex)=>{
    map.set(value, curIndex)
})

console.log(inputArr.map((num)=>map.get(num)).join(" "))