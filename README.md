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

---

### 💡 Idea

#### 🟡 교집합 & 합집합 개수 구하기

> 결국 개수만 필요한 경우, 각 요소에 대해 개수를 파악해서 min, max로 개수 파악 가능

```
const set = new Set([...arr1, ...arr2]);

let union = 0;
let intersection = 0;

set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;

    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
})

```

#### 🟡 n진수 변환

**10진수 -> N진수**

```
//10진수 -> 2진수
number.toString(2)
//10진수 -> 3진수
number.toString(3);
//10진수 -> N진수
number.toString(N);
```

**N진수 -> 10진수**

```
//2진수 -> 10진수
parseInt(string,2);
//3진수 -> 10진수
parseInt(string,3);
//N진수 -> 10진수
parseInt(string,N);
```

**N진수 -> N진수**

```
//3진수 -> 2진수
parseInt("21121",3).toString(2);
```
