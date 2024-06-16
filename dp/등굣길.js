function solution(m, n, puddles) {
  const DIVISOR = 1000000007;

  const wayArr = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    wayArr[i] = new Array(n + 1).fill(0);
  }

  wayArr[1][1] = 1;

  puddles.forEach(([i, j]) => {
    wayArr[i][j] = -1;
  });

  //dp[i] = dp[i-1][j] + dp[i][j-1]
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if ((i === 1 && j === 1) || wayArr[i][j] === -1) {
        continue;
      }

      if (wayArr[i - 1][j] !== -1 && wayArr[i][j - 1] !== -1) {
        // 나머지 연산을 최종 결과에만 수행하는 대신, 모든 연산 후에 바로바로 나머지 연산을 수행하는 것이 더 효율적
        wayArr[i][j] = (wayArr[i - 1][j] + wayArr[i][j - 1]) % DIVISOR;
      } else if (wayArr[i - 1][j] !== -1) {
        wayArr[i][j] = wayArr[i - 1][j];
      } else if (wayArr[i][j - 1] !== -1) {
        wayArr[i][j] = wayArr[i][j - 1];
      } else {
        wayArr[i][j] = -1;
      }
    }
  }

  return wayArr[m][n];
}
