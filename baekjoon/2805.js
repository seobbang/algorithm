const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const treeArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function calculateTree(H) {
  return treeArr.reduce((acc, cur) => {
    return acc + (cur > H ? cur - H : 0);
  }, 0);
}

function solution() {
  let left = 0;
  let right = treeArr[treeArr.length - 1];
  let max_idx = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (calculateTree(mid) >= M) {
      left = mid + 1;
      max_idx = Math.max(max_idx, mid);
    } else {
      right = mid - 1;
    }
  }

  return max_idx;
}

console.log(solution());
