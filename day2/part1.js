import { readFileSync } from "fs";

let str = readFileSync("./list.txt", "utf8");

function getParsedArr(str) {
    return str.split("\n").map((i) => {
        return i.split(" ").map((j) => +j);
    });
}

function getRange(v1, v2, isIncrease) {
    const range = isIncrease ? v2 - v1 : v1 - v2;
    return range >= 1 && range <= 3;
}

let matrixArr = getParsedArr(str);

let safe = 0;
for (let el of matrixArr) {
    for (let i = 0; i < el.length; i++) {
        const nextIdx = i + 1;
        const isIncreaseFirstPair = el[0] < el[1];
        const lastEl = nextIdx === el.length;
        const isRage = lastEl || getRange(el[i], el[nextIdx], isIncreaseFirstPair);
        if (!isRage) break;
        if (lastEl) safe += 1;
    }
}

console.log(safe);
