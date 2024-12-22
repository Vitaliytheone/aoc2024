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

let num = 0;
arrLeft.forEach((_, idx) => {
    num += Math.abs(arrLeft[idx] - arrRight[idx]);
});

console.log(num);
