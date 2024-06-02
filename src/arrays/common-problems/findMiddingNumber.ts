export function findMissingNumber(arr: number[], n: number): number {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1], 3)); // Output: 2
