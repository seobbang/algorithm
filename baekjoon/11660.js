const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = []

for(let i = 1; i<= N; i++) {
    arr.push(input[i].split(" ").map(Number));
}

const sum = Array.from({length: N}, ()=>Array.from({length: N}));

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(i > 0 && j > 0) {
            sum[i][j] = arr[i][j] + sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1];
        } else if(i > 0) {
            sum[i][j] = arr[i][j] + sum[i-1][j];
        } else if(j > 0) {
            sum[i][j] = arr[i][j] + sum[i][j-1];
        } else {
            sum[j][j] = arr[i][j];
        }
    }
}

for(let i = N + 1; i <= N + M; i++){
    const [a, b, c, d] = input[i].split(" ").map((num)=>(Number(num) - 1));

    let answer;

    if(a > 0 && b > 0) {
        answer = sum[c][d] - sum[a-1][d] - sum[c][b-1] + sum[a-1][b-1];
    } else if(a > 0) {
        answer = sum[c][d] - sum[a-1][d];
    } else if(b > 0) {
        answer = sum[c][d] - sum[c][b-1];
    } else {
        answer = sum[c][d]
    }
    console.log(answer);
}