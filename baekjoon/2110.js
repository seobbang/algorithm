const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const home = [];
for (let i = 1; i <= N; i++) {
  home.push(Number(input[i]));
}
home.sort((a, b) => a - b);

function findIndex(distance, homeCopy) {
  let left = 0;
  let right = homeCopy.length - 1;
  let min_idx = homeCopy.length;

  while (left <= right) {
    const mid = Math.floor(left + right / 2);

    if (homeCopy[mid] >= distance) {
      right = mid - 1;
      min_idx = Math.min(min_idx, mid);
    } else {
      left = mid + 1;
    }
  }

  return min_idx === homeCopy.length ? -1 : min_idx;
}

function calculateCount(distance) {
  let count = 1;
  let now = home[0];
  let homeCopy = [...home];

  while (true) {
    const index = findIndex(now + distance, homeCopy);

    if (index === -1) {
      break;
    } else {
      count++;
      now = homeCopy[index];
      homeCopy.splice(0, index + 1);
    }
  }

  return count;
}

function solution() {
  let left = 0;
  let right = home.length - 1;
  let max_idx = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (calculateCount(mid) >= C) {
      left = mid + 1;
      max_idx = Math.max(max_idx, mid);
    } else {
      right = mid - 1;
    }
  }

  return max_idx;
}

console.log(solution());
