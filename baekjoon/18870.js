const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const inputArr = input[1].split(" ").map(Number) // O(N)

const sortedArr = Array.from(new Set([...inputArr].sort((a, b)=>a-b))) // O(N) + O(NlogN) (중복제거 + 정렬)

const map = new Map();

sortedArr.forEach((value, curIndex)=>{ // O(M) (M: N에서 중복 제거된 개수)
    map.set(value, curIndex)
})

console.log(inputArr.map((num)=>map.get(num)).join(" ")) // O(N)

// O(N) + O(N) + O(NlogN) + O(N) + O(N) => O(NlogN)