function solution(participant, completion) {
  const map = new Map();

  // participant를 key로, 그 이름을 가진 사람 수를 값(value)으로 지정하여 map을 set
  participant.forEach((p) => {
    // 이미 있으면 1 올려주고 없으면 값을 1로 해서 저장
    map.set(p, (map.get(p) || 0) + 1);
  });

  // completion에 대해 map에서 찾아서 하나씩 제거
  completion.forEach((c) => {
    if (map.get(c) > 1) {
      map.set(c, map.get(c) - 1);
    } else {
      map.delete(c);
    }
  });

  // 남은 key는 하나일 것이므로 바로 return
  return [...map.keys()][0];
}
