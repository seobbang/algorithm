function solution(nums) {
  const N = nums.length;

  const array = [];
  nums.forEach((num) => {
    if (!array.includes(num)) array.push(num);
  });

  return array.length >= N / 2 ? N / 2 : array.length;
}
