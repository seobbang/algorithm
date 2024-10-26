## algorithm

| date   | problem                                                                            |
| ------ | ---------------------------------------------------------------------------------- |
| 240805 | 프로그래머스 - 내적(Lv1), 최댓값과 최솟값(Lv2)                                     |
| 240806 | 프로그래머스 - 최대공약수와최소공배수(Lv1), 올바른괄호(Lv2), 이진변환반복하기(Lv2) |
| 240807 | 프로그래머스 - 3진법 뒤집기(Lv1), 예산(Lv1)                                        |
| 240809 | 프로그래머스 - 숫자 문자열과 영단어(Lv1), 점프와 순간이동(Lv2)                     |
| 240815 | 프로그래머스 - [1차] 비밀지도(Lv1)                                                 |
| 240924 | 프로그래머스 - [1차] 캐시(Lv2)                                                     |
| 241005 | 프로그래머스 - [1차] 뉴스 클러스터링(Lv2)                                          |
| 241006 | 프로그래머스 - [3차] n진수 게임(Lv2)                                               |
| 241007 | 프로그래머스 - k진수에서 소수 개수 구하기(Lv2)                                     |
| 241025 | 백준 - 설탕 배달(2839) #DP                          |
| 241026 | 백준 - 1로 만들기(1463), 2×n 타일링(11726) #DP                          |

---

### 💡 Idea

#### 🟡 교집합 & 합집합 개수 구하기

> 결국 개수만 필요한 경우, 각 요소에 대해 개수를 파악해서 min, max로 개수 파악 가능

```js
const set = new Set([...arr1, ...arr2]);

let union = 0;
let intersection = 0;

set.forEach((item) => {
  const has1 = arr1.filter((x) => x === item).length;
  const has2 = arr2.filter((x) => x === item).length;

  union += Math.max(has1, has2);
  intersection += Math.min(has1, has2);
});
```

#### 🟡 n진수 변환

**10진수 -> N진수**

```js
//10진수 -> 2진수
number.toString(2);
//10진수 -> 3진수
number.toString(3);
//10진수 -> N진수
number.toString(N);
```

**N진수 -> 10진수**

```js
//2진수 -> 10진수
parseInt(string, 2);
//3진수 -> 10진수
parseInt(string, 3);
//N진수 -> 10진수
parseInt(string, N);
```

**N진수 -> N진수**

```js
//3진수 -> 2진수
parseInt("21121", 3).toString(2);
```

#### 🟡 소수 판별하기 / 개수 세기

(1) 소수 판별하기

> N - 1 또는, N / 2 까지 계산하면 시간 복잡도가 너무 크기 때문에,
> N의 제곱근까지만 검사.
> 결국 약수는 짝을 지어 존재하기 때문에 N의 제곱근까지만 검사를 해도 된다.

```js
function isPrimeNumber(num) {
  if (num <= 1) return false;

  let res = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }

  return res;
}
```

(2) 소수 개수 세기

> 에라토스테네스의 체 이용하기.(배열) <br/>
> 마찬가지로 N의 제곱근까지만 시행하면 됨. (e.g. 11^2 > 120 이므로 11보다 작은 수의 배수들만 지워도 충분하다.)

```js
function isPrime(num) {
  // 배열 길이: num + 1 (index 0이 존재하므로)
  let arr = Array(num + 1).fill(true);

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.sqtr(num); i++) {
    if (arr[i]) {
      // 아직 지워지지 않은 수
      // i의 배수들 지우기
      for (let j = i * i; j <= num; j += i) {
        // 반복을 i * i 부터 시작하는 이유:
        // 2 ~ i-1은 이미 이 방식으로 확인된 수들이기 때문
        // e.g. i = 5) 5*2, 5*3, 5*4 는 이미 2,3,4턴에 지워짐.
        arr[j] = false;
      }
    }
  }

  return arr.filter((el) => el).length;
}
```

#### DP
* 점화식 생각하기
* 최소 N값 (N = 1,2,3..) return값 정의하기
* memoization 이용하기 (`const memo = new Array(N)`)

#### 🟡 2×n 타일
점화식 : `f(N) = f(N-1) + f(N-2)` (피보나치 수열)
> f(N-1) 에 2x1 타일을 하나 더 더하는 경우
> f(N-2) 에 1x2 타일을 두개 더 더하는 경우

