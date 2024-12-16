import { readFileSync } from "fs";

let str1 = readFileSync("./List1.txt", "utf8");
let str2 = readFileSync("./List2.txt", "utf8");

function getParsedArr(str) {
    return str
        .split("\n")
        .map((i) => +i)
        .sort((a, b) => a - b);
}

let arrLeft = getParsedArr(str1);
let arrRight = getParsedArr(str2);
// part 1

let num = 0;
arrLeft.forEach((_, idx) => {
    num += Math.abs(arrLeft[idx] - arrRight[idx]);
});

// part 2

let simNum = 0;
const uniqCount = new Map();
arrRight.forEach((i) => {
    if (uniqCount.has(i)) {
        uniqCount.set(i, uniqCount.get(i) + 1);
    } else {
        uniqCount.set(i, 1);
    }
});

arrLeft.forEach((i) => {
    const num = uniqCount.get(i);
    simNum += num ? num * i : 0;
});
