function solution(priorities, location) {
  var answer = 0;

  const map = new Map();
  // 같은 우선순위를 가진 프로세스끼리 묶기. (idx 0 = A 프로세스, idx 1 = B 프로세스, ...)
  priorities.forEach((num, idx) => {
    const prevItem = map.get(num);
    prevItem ? map.set(num, [...prevItem, idx]) : map.set(num, [idx]);
  });

  // map을 배열로 펼쳐 우선순위 내림차순으로 정렬
  const mapEntries = [...map.entries()];
  const prioArray = mapEntries
    .sort((a, b) => b[0] - a[0])
    .map((item) => {
      return item[1];
    });

  // queue에 각 index(프로세스) 집어넣어 생성
  const queue = [];
  for (let i = 0; i < priorities.length; i++) {
    queue.push(i);
  }

  while (queue.length > 0) {
    // 대기중인 프로세스 꺼내기
    const targetIdx = queue.shift();
    // 현재 우선순위가 가장 높은 프로세스들이 담긴 배열
    const targetPrio = prioArray[0];

    // 현재 우선순위가 가장 높으면
    if (targetPrio.includes(targetIdx)) {
      // 해당 우선순위 프로세스 배열에서 해당 타겟을 제외한 새로운 배열생성
      const deletedTargetArr = prioArray[0].filter((item) => {
        return item !== targetIdx;
      });

      // 더 이상 해당 우선순위에 해당하는 프로세스가 없으면 우선순위 배열에서 해당 우선순위 삭제
      if (deletedTargetArr.length === 0) prioArray.shift();
      else prioArray[0] = deletedTargetArr;

      answer++;
      // 문제에 주어진 location이랑 같으면 반복 종료
      if (targetIdx === location) break;
    } else {
      // 우선순위가 높은 다른 프로세스가 있으면 다시 맨 뒤로 push
      queue.push(targetIdx);
    }
  }
  return answer;
}
