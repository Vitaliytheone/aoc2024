// import { readFileSync } from "fs";

// let data1 = readFileSync("./List1.txt", "utf8");
// let data2 = readFileSync("./List2.txt", "utf8");

// const arr = data2.split("\n");
// const numbers = new Map();

// function getCorrect(str) {
//     const newStr = str.split(",");
//     let middleNum = 0;
//     for (let i = 0; i < newStr.length; i++) {
//         if (i === newStr.length - 1) {
//             const middleIdx = Math.round(newStr.length / 2);
//             middleNum = +newStr[middleIdx - 1];
//             console.log("🚀 ~ getCorrect ~ middleNum:", middleNum);
//         }
//         let next;
//         const nums = numbers.get(newStr[i]);
//         next = nums.next;
//         if (!nums || !next.includes(newStr[i + 1])) {
//             break;
//         }
//     }

//     return middleNum;
// }

// data1.split("\n").forEach((i) => {
//     const nums = i.split("|");
//     const isFirst = numbers.has(nums[0]);
//     const isSecond = numbers.has(nums[1]);
//     if (isFirst) {
//         const v = { ...numbers.get(nums[0]) };
//         v.next = [...v.next, nums[1]];
//         numbers.set(nums[0], v);
//     } else {
//         numbers.set(nums[0], { prev: [], next: [nums[1]] });
//     }
//     if (isSecond) {
//         const v = { ...numbers.get(nums[1]) };
//         v.prev = [...v.prev, nums[0]];
//         numbers.set(nums[1], v);
//     } else {
//         numbers.set(nums[1], { prev: [nums[0]], next: [] });
//     }
// });

// let sum = 0;
// arr.forEach((i) => {
//     sum += getCorrect(i);
// });

// // sum: 6498
// console.log("🚀 ~ parsedArr:", sum);
