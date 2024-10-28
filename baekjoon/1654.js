const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lanArr = [];
for (let i = 1; i <= K; i++) {
  lanArr.push(Number(input[i]));
}
lanArr.sort((a, b) => a - b);

function calculateLanCount(length) {
  return lanArr.reduce((acc, lan) => {
    return acc + Math.floor(lan / length);
  }, 0);
}

function solution() {
  let left = 0;
  let right = lanArr[lanArr.length - 1];
  let max_idx = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (calculateLanCount(mid) >= N) {
      left = mid + 1;
      max_idx = Math.max(max_idx, mid);
    } else {
      right = mid - 1;
    }
  }

  return max_idx;
}

console.log(solution());
