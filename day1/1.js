import { readFileSync } from "fs";

let str1 = readFileSync("./List1.txt", "utf8");
let str2 = readFileSync("./List2.txt", "utf8");

function getParsedArr(str) {
    return str
        .split("\n")
        .map((i) => +i)
        .sort((a, b) => a - b);
}

let arr1 = getParsedArr(str1);
console.log("🚀 ~ arr1:", arr1);
let arr2 = getParsedArr(str2);
console.log("🚀 ~ arr2:", arr2);
let num = 0;

arr1.forEach((_, idx) => {
    num += Math.abs(arr1[idx] - arr2[idx]);
});

console.log(num);
