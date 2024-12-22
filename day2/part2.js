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

let safeArr = [];
function getInternal(el, oneChance) {
    console.log("🚀 ~ getInternal ~ el:", el);
    for (let i = 0; i < el.length; i++) {
        let oneChanceLocal = oneChance;
        const nextIdx = i + 1;
        const isIncreaseFirstPair = el[0] < el[1];
        const lastEl = nextIdx === el.length;
        const firstEl = i === 0;
        const isRage = lastEl || getRange(el[i], el[nextIdx], isIncreaseFirstPair);
        if (!isRage) {
            if (!oneChanceLocal) {
                const filteredArr = el.filter(
                    (_, idx) => idx !== (firstEl ? 1 : el.length - nextIdx === 1 ? nextIdx : i),
                );
                getInternal(filteredArr, true);
            }

            break;
        }
        if (lastEl) {
            safeArr.push(el);
        }
    }
}

function getSafe(arr) {
    for (let el of arr) {
        getInternal(el, false);
    }
}

getSafe(matrixArr);

console.log(safeArr.length);
