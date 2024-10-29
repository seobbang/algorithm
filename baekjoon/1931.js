const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [, ...data] = input;
const schedule = data.map((item) => {
  return item.split(" ").map(Number);
});
schedule.sort(
  ([start_a, end_a], [start_b, end_b]) => end_a - end_b || start_a - start_b
);

function solution() {
  let count = 0;
  let prevEnd = 0;

  schedule.forEach(([start, end]) => {
    if (prevEnd <= start) {
      prevEnd = end;
      count++;
    }
  });
  return count;
}

console.log(solution());
