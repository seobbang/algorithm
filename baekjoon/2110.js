const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [firstLine, ...data] = input;
const [, C] = firstLine.split(" ").map(Number);
const home = data.map(Number).sort((a, b) => a - b);

function calculateCount(distance) {
  // 제일 왼쪽에 하나 놓기
  let count = 1;
  let prev = home[0];

  home.forEach((cur) => {
    if (cur - prev >= distance) {
      count++;
      prev = cur;
    }
  });

  return count;
}

function solution() {
  // left, right => 거리
  let left = 1;
  let right = home[home.length - 1];

  let max_idx = -1; // 가능한 거리 중 가장 큰 거리

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
