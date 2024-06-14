function solution(triangle) {
  var answer = 0;
  // dp[i][j] = Max(dp[i-1][j-1], dp[i-1][j]) + value[i][j]
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      let calVal;
      if (j === 0) {
        calVal = triangle[i - 1][j] + triangle[i][j];
      } else if (j === i) {
        calVal = triangle[i - 1][j - 1] + triangle[i][j];
      } else {
        calVal =
          Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j];
      }
      triangle[i][j] = calVal;
    }
  }
  for (let j = 0; j < triangle.length; j++) {
    answer = Math.max(answer, triangle[triangle.length - 1][j]);
  }
  return answer;
}
