import { readFileSync } from "fs";

let str = readFileSync("./list.txt", "utf8");

let sum = 0;
const mul = (v1, v2) => {
    return v1 * v2;
};
str.match(/mul\(\d+\,\d+\)/g).forEach((i) => {
    sum += eval(i);
});
