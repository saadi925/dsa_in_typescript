export function myAtoi(s: string): number {
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);

    const match = s.match(/^ *([+-]?\d+)/);
    if (!match) return 0;

    const num = parseInt(match[1], 10);
    if (isNaN(num)) return 0;

    return Math.max(Math.min(num, maxInt), minInt);
}

console.log(myAtoi("42"));         // Output: 42
console.log(myAtoi("   -42"));     // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
