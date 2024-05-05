function solution(clothes) {
  var answer = 1; // 1개만 입었을 때

  // Map 만들기
  const map = new Map();

  clothes.forEach((item) => {
    const prevItem = map.get(item[1]);
    map.set(item[1], prevItem ? prevItem + 1 : 1); // 숫자만 누적시키기
  });

  const values = [...map.values()];
  values.forEach((v) => {
    answer *= v + 1;
  });
  return answer - 1;
}
