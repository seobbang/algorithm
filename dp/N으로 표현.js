// 답 참고
/* 문제 조건) 최대 가능 길이는 8
    dp[i] : N을 i개써서 만들 수 있는 모든 수들의 집합
*/

function solution(N, number) {
  // 인덱스 이용을 위해 length 9이고, 각각 set을 가지고 있는 배열 생성
  const dp = Array.from({ length: 9 }, () => new Set());
  // N을 1개 가지고 만들 수 있는건 N뿐
  dp[1].add(N);

  for (let i = 1; i <= 8; i++) {
    // 기본적으로 N을 i개 쓸 때 NN...N (i개) 만들 수 있으므로 추가
    // e.g. 5를 4개 쓸 때 5555 가능
    dp[i].add(Number(String(N).repeat(i)));

    /* i가 4일 때,
            dp[1] & dp[3] 각 집합 내 원소를 조합해서 만들 수 있는 숫자들
            dp[2] & dp[2] 각 집합 내 원소를 조합해서 만들 수 있는 숫자들
            을 추가
        */
    for (let j = 1; j < i; j++) {
      // dp[j]와 dp[i-j] 원소들의 모든 조합으로 사칙연산하기
      for (const num1 of dp[j]) {
        for (const num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 * num2);
          dp[i].add(num1 - num2);
          dp[i].add(Math.floor(num1 / num2));
        }
      }
    }
    // number가 만들어진다면 이 때 N의 개수가 가장 최소일 것이므로 바로 return
    if (dp[i].has(number)) {
      return i;
    }
  }

  // 끝까지 없다면 -1 return
  return -1;
}
