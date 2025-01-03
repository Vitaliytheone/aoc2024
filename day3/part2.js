import { readFileSync } from "fs";

let str = readFileSync("./list.txt", "utf8");

const mainPattern = /do\(\)(.|\n)+?mul\(\d+\,\d+\).+?don't\(\)/g;
const firstPattern = /mul\(\d+\,\d+\).+?do/g;
const mulPattern = /mul\(\d+\,\d+\)/g;

let sum = 0;

function calculateSum(pattern, isFirst) {
    const matched = str.match(pattern);
    const parsed = isFirst ? matched.slice(0, 1) : matched;
    return parsed
        .map((i) => i.match(mulPattern))
        .forEach((i) =>
            i.forEach((j) => {
                const { num1, num2 } = getParsedMulParams(j);
                sum += num1 * num2;
            }),
        );
}

function getParsedMulParams(str) {
    const comma = str.indexOf(",");
    const num1 = str.slice(str.indexOf("(") + 1, comma);
    const num2 = str.slice(comma + 1, str.indexOf(")"));
    return { num1, num2 };
}

calculateSum(firstPattern, true);
calculateSum(mainPattern);

// 98729041
