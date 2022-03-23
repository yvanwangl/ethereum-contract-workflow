// iconfont
const arr1 = [35, 50, 60, 30, 72, 25, 40, 60, 18];
const arr2 = [60, 90, 75, 103, 62, 180, 50, 90, 50];
// 色板
// const arr1 = [9, 30, 40, 16,12,5,6,7,20];
// const arr2 = [13, 6, 18,30,20,14,16,9,20];
// 文本填充
// const arr1 = [19, 24, 29, 28, 11, 57, 20, 20 ,100];
// const arr2 = [56, 240, 61, 78, 137, 264, 65, 52, 44];
// 图片填充
// const arr1 = [10,20,95,20,16,12,13,10,15];
// const arr2 = [30,80,100,153,93,91,96,42,200];

const getScore = (arr) => {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let values = arr.filter(item => (item !== min && item !== max));
  let sum = values.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
  return sum;
};

let arr1Score = getScore(arr1);
let arr2Score = getScore(arr2);
console.log((arr2Score - arr1Score) / 7);