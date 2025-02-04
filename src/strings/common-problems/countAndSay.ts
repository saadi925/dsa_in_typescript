export function countAndSay(n: number): string {
    if (n === 1) return "1";

    const previous = countAndSay(n - 1);
    let result = "";
    let count = 1;

    for (let i = 1; i < previous.length; i++) {
        if (previous[i] === previous[i - 1]) {
            count++;
        } else {
            result += count + previous[i - 1];
            count = 1;
        }
    }
    result += count + previous[previous.length - 1];

    return result;
}

console.log(countAndSay(4)); // Output: "1211"
