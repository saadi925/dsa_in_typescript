export function strStr(haystack: string, needle: string): number {
    if (needle === "") return 0;
    return haystack.indexOf(needle);
}

console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
