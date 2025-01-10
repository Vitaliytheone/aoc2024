import { readFileSync } from "fs";

let str = readFileSync("./list.txt", "utf8");
const arr = str.split("\n");

const entries = 0;
const pattern = "XMAS";

function getAllEntries() {
    arr.forEach((string) => {
        console.log("🚀 ~ arr.forEach ~ string:", string);
    });
}
